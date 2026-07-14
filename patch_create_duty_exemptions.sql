-- ตารางประกาศยกเว้นเวรส่วนกลาง
-- แอป wen ใช้บัญชีผู้ใช้ภายในแอป (ไม่ได้ใช้ Supabase Auth) จึงต้องเปิดให้ anon
-- อ่าน/เขียนเหมือนตารางข้อมูลเดิมของระบบ โดยสิทธิ์ผู้ประกาศถูกตรวจในหน้าแอป

CREATE TABLE IF NOT EXISTS public.duty_exemptions (
  id TEXT PRIMARY KEY,
  date DATE NOT NULL,
  duty_group TEXT NULL CHECK (duty_group IS NULL OR duty_group IN ('ครูชาย', 'ครูหญิง')),
  point_ids JSONB NOT NULL DEFAULT '[]'::jsonb,
  reason TEXT NOT NULL,
  declared_by TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT duty_exemptions_point_ids_array
    CHECK (jsonb_typeof(point_ids) = 'array')
);

CREATE INDEX IF NOT EXISTS duty_exemptions_date_idx
  ON public.duty_exemptions (date DESC);

ALTER TABLE public.duty_exemptions ENABLE ROW LEVEL SECURITY;

GRANT SELECT, INSERT, UPDATE, DELETE ON public.duty_exemptions TO anon, authenticated;

DROP POLICY IF EXISTS "wen users can read duty exemptions" ON public.duty_exemptions;
CREATE POLICY "wen users can read duty exemptions"
  ON public.duty_exemptions
  FOR SELECT
  TO anon, authenticated
  USING (true);

DROP POLICY IF EXISTS "wen users can create duty exemptions" ON public.duty_exemptions;
CREATE POLICY "wen users can create duty exemptions"
  ON public.duty_exemptions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "wen users can update duty exemptions" ON public.duty_exemptions;
CREATE POLICY "wen users can update duty exemptions"
  ON public.duty_exemptions
  FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

DROP POLICY IF EXISTS "wen users can delete duty exemptions" ON public.duty_exemptions;
CREATE POLICY "wen users can delete duty exemptions"
  ON public.duty_exemptions
  FOR DELETE
  TO anon, authenticated
  USING (true);

NOTIFY pgrst, 'reload schema';
