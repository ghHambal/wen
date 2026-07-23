-- เพิ่มความสามารถให้จุดเวรระบุ "ใช้เฉพาะวันใดวันหนึ่ง" ได้ (เช่น จุดเวรวันศุกร์)
-- ค่า NULL หมายถึงใช้ทุกวัน (พฤติกรรมเดิมของจุดเวรที่มีอยู่แล้วทั้งหมด ไม่กระทบ)

ALTER TABLE public.duty_points
ADD COLUMN IF NOT EXISTS restricted_day TEXT;
