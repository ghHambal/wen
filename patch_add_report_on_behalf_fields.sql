-- ข้อมูลตรวจสอบย้อนหลังสำหรับรายงานที่หัวหน้าเวรบันทึกแทนครู
ALTER TABLE public.reports
  ADD COLUMN IF NOT EXISTS submitted_on_behalf BOOLEAN NOT NULL DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS submitted_by TEXT,
  ADD COLUMN IF NOT EXISTS submission_reason TEXT;

COMMENT ON COLUMN public.reports.submitted_on_behalf IS 'true เมื่อหัวหน้าเวร/หัวหน้างานเวร/แอดมินรายงานแทนครู';
COMMENT ON COLUMN public.reports.submitted_by IS 'รหัสผู้ใช้งานที่เป็นผู้บันทึกรายงานแทน';
COMMENT ON COLUMN public.reports.submission_reason IS 'เหตุผลที่ต้องบันทึกรายงานแทน';
