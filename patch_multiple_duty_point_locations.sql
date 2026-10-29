-- Run once in the Wen Supabase SQL Editor before saving duty points with 3+ areas.
-- Safe to rerun: adds the JSONB column if needed and only backfills empty values.
ALTER TABLE public.duty_points
  ADD COLUMN IF NOT EXISTS locations JSONB NOT NULL DEFAULT '[]'::jsonb;

UPDATE public.duty_points
SET locations = CASE
  WHEN lat2 IS NOT NULL AND lng2 IS NOT NULL THEN jsonb_build_array(
    jsonb_build_object('lat', lat, 'lng', lng, 'radius', radius),
    jsonb_build_object('lat', lat2, 'lng', lng2, 'radius', COALESCE(radius2, radius))
  )
  ELSE jsonb_build_array(
    jsonb_build_object('lat', lat, 'lng', lng, 'radius', radius)
  )
END
WHERE locations IS NULL OR locations = '[]'::jsonb;
