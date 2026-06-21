-- เพิ่มคอลัมน์การตั้งค่าที่เกี่ยวกับข้อความป๊อปอัพและเวลาปฏิบัติขั้นต่ำก่อนส่งรายงานเวร
-- รันใน Supabase SQL Editor ได้อย่างปลอดภัย หากมีคอลัมน์อยู่แล้วจะไม่สร้างซ้ำ

ALTER TABLE settings
  ADD COLUMN IF NOT EXISTS appreciation_dua_text TEXT;

ALTER TABLE settings
  ADD COLUMN IF NOT EXISTS ikhlas_confirm_text TEXT;

ALTER TABLE settings
  ADD COLUMN IF NOT EXISTS default_duty_minutes INTEGER DEFAULT 20;

ALTER TABLE settings
  ADD COLUMN IF NOT EXISTS enforce_min_duty_minutes BOOLEAN NOT NULL DEFAULT TRUE;

ALTER TABLE duty_points
  ADD COLUMN IF NOT EXISTS min_duty_minutes INTEGER;

-- ย้ายรูปหลักฐานรายงานเวรใหม่ไปเก็บใน Supabase Storage พร้อม thumbnail
ALTER TABLE reports
  ADD COLUMN IF NOT EXISTS photo_thumb TEXT;

ALTER TABLE reports
  ADD COLUMN IF NOT EXISTS photo_path TEXT;

ALTER TABLE reports
  ADD COLUMN IF NOT EXISTS photo_thumb_path TEXT;

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'wen-report-photos',
  'wen-report-photos',
  true,
  1048576,
  ARRAY['image/jpeg', 'image/png', 'image/webp']
)
ON CONFLICT (id) DO UPDATE
SET public = true,
    file_size_limit = 1048576,
    allowed_mime_types = ARRAY['image/jpeg', 'image/png', 'image/webp'];

DROP POLICY IF EXISTS "wen_report_photos_select" ON storage.objects;
CREATE POLICY "wen_report_photos_select"
ON storage.objects
FOR SELECT
TO anon
USING (bucket_id = 'wen-report-photos');

DROP POLICY IF EXISTS "wen_report_photos_insert" ON storage.objects;
CREATE POLICY "wen_report_photos_insert"
ON storage.objects
FOR INSERT
TO anon
WITH CHECK (bucket_id = 'wen-report-photos');

DROP POLICY IF EXISTS "wen_report_photos_update" ON storage.objects;
CREATE POLICY "wen_report_photos_update"
ON storage.objects
FOR UPDATE
TO anon
USING (bucket_id = 'wen-report-photos')
WITH CHECK (bucket_id = 'wen-report-photos');
