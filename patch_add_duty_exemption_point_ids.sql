-- เพิ่มความยืดหยุ่นให้ประกาศยกเว้นเวรเลือกเฉพาะบางจุดได้
-- ค่า [] หมายถึงยกเว้นทุกจุดในวัน/กลุ่มเดิม เพื่อรองรับข้อมูลเก่าที่เคยประกาศทั้งกลุ่ม

ALTER TABLE public.duty_exemptions
ADD COLUMN IF NOT EXISTS point_ids JSONB NOT NULL DEFAULT '[]'::jsonb;
