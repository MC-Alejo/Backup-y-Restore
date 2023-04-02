@echo off
SET PG_HOST=localhost
SET PG_PORT=5432
SET PG_DATABASE=CALP
SET PG_USER=postgres
SET PGPASSWORD=usuario
SET PG_BIN="C:\Program Files\PostgreSQL\15\bin\pg_dump.exe"
SET PG_FILENAME="%cd%\backups\BACKUP_2023-02-26_20-53-32.272607.backup"
%PG_BIN% -h %PG_HOST% -p %PG_PORT% -U %PG_USER% --format custom -b -f %PG_FILENAME% %PG_DATABASE%