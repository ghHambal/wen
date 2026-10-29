# Changelog

## 1.35.16 - 2026-10-29

- Duty points can now have any number of GPS areas, each with its own radius.
- The admin editor supports adding, removing, and selecting each area on the map.
- Duty geofence checks use all configured areas; teacher and admin maps, directions, and coordinate details show them all.
- Added `patch_multiple_duty_point_locations.sql` to add and backfill the Supabase `duty_points.locations` column for existing installations.
- Saving more than two areas is blocked with an explanatory message until the SQL patch has been applied.
