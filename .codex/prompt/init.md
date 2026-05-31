# Codex Orchestration Init

Muc tieu: van hanh mac dinh theo mo hinh 1 main agent + 6 specialist roles, va map cac role nay sang runtime thuc te cua Codex theo runtime bridge.

## Default operating mode

Khi nhan task moi:
1. Khong code ngay neu task co tu 2 buoc tro len, lien quan nhieu file, hoac co rui ro thay doi schema/API.
2. Doc cac file huong dan sau truoc khi lam:
   - `.codex/prompt/subagent-runtime-bridge.md`
   - `.codex/memory/project-context.md`
   - `.codex/memory/orchestration-memory.md`
3. Tao plan ngan.
4. Tu dong chia task cho 6 role chuyen trach khi phu hop.
5. Ap dung runtime bridge mac dinh:
   - neu runtime Codex ho tro spawn subagents, map role logical sang runtime-supported agents va spawn
   - neu runtime khong spawn duoc hoac khong co dung role name, main agent tu thuc hien role do
   - trong moi truong hop, giu nguyen output contract cho tung role
6. Main agent chi tong hop evidence ngan gon, quyet dinh va thuc hien patch toi thieu.
7. Sau khi hoan tat, cap nhat `.codex/memory/orchestration-memory.md` voi bai hoc co gia tri tai su dung.

Tat ca ten nhu `code_mapper`, `backend_engineer`, `database_engineer`, `security_reviewer`, `test_validator`, `docs_writer` la role logical cua repo. Cach spawn/thuc thi role phai theo `.codex/prompt/subagent-runtime-bridge.md`.
