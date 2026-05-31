# Quick Commands

Muc dich: cac prompt ngan de paste vao Codex CLI moi khi bat dau task, de agent tu dong bam bo orchestration trong repo nay.

## 1. Khoi dong task non-trivial

```text
Doc `AGENTS.md` va cac file trong `.codex/prompt` + `.codex/memory` truoc. Ap dung orchestration mac dinh cua repo: map code truoc, lap plan ngan, chia sub-task cho dung nhom agents, chi implement sau khi da co evidence. Sau do xu ly task nay: [mo ta task]
```

## 2. Chi khao sat, chua implement

```text
Do not implement yet.
Doc `AGENTS.md`, `.codex/prompt/init.md`, `.codex/prompt/task-starter.md`, `.codex/prompt/examples.md`, `.codex/memory/project-context.md`, `.codex/memory/orchestration-memory.md`.
Sau do:
1. Check model, method, route, service, schema lien quan
2. Produce implementation plan
3. Break plan thanh sub-task
4. Assign sub-task cho sub-agents phu hop
5. List risk va validation
Task: [mo ta task]
```

## 3. Backend/API task

```text
Ap dung orchestration cua repo cho backend/API task nay.
Bat buoc dung toi thieu `code_mapper` + `backend_engineer`; neu co data/schema thi them `database_engineer`; neu co auth/upload/file thi them `security_reviewer`; neu co thay doi hanh vi thi them `test_validator`.
Main agent chi tong hop report ngan roi moi implement.
Task: [mo ta task]
```

## 4. Upload / image task

```text
Ap dung orchestration upload/file cua repo.
Truoc tien, dung `code_mapper` de map create/update flow, image/file models, static-file config, wwwroot, request binding patterns.
Sau do giao tiep cho `backend_engineer`, `database_engineer`, `security_reviewer`, `test_validator`.
Main agent tong hop report ngan theo: relevant files, existing patterns, decision, plan, risks, validation.
Task: [mo ta task]
```

## 5. Bug fix task

```text
Ap dung orchestration bug-fix cua repo.
Khong fix ngay. Truoc tien dung `code_mapper` de trace root cause, `backend_engineer` de de xuat fix tai goc, `test_validator` de dua repro + validation plan.
Chi sau khi co evidence moi implement patch nho nhat.
Task: [mo ta task]
```

## 6. Refactor task

```text
Ap dung orchestration refactor cua repo.
Truoc tien map boundaries, call sites, va pattern dang duoc dung. Khong doi behavior neu khong duoc yeu cau.
Dung `code_mapper` + `test_validator`, va them `backend_engineer` neu refactor lien quan API/service.
Task: [mo ta task]
```

## 7. Implement sau khi da plan

```text
Tiep tuc task nay theo orchestration da thong nhat.
Truoc khi edit, noi ro file se doi va vi sao.
Implement patch nho nhat theo plan da co, giu dung convention san co, khong dong vao file khong lien quan.
Sau khi xong, validate bang lenh phu hop nhat va cap nhat `.codex/memory/orchestration-memory.md` neu co pattern moi tai su dung duoc.
Task: [mo ta task]
```

## 8. Yeu cau report ngan truoc khi code

```text
Truoc khi code, hay tra ve dung format sau:
- Relevant files and code paths
- Existing patterns to reuse
- Implementation plan
- Sub-agent task breakdown
- Risks
- Validation steps
Task: [mo ta task]
```

## 9. Yêu c?u agent t? c?p nh?t memory sau task

```text
Sau khi hoan tat task, hay cap nhat `.codex/memory/orchestration-memory.md` voi:
- pattern moi lap lai duoc
- routing rule moi neu co
- validation lesson neu co gia tri tai su dung
Task: [mo ta task]
```

## 10. Prompt full-power de dung hang ngay

```text
Doc `AGENTS.md` va toan bo file trong `.codex/prompt` + `.codex/memory` lien quan truoc. Ap dung bo orchestration mac dinh cua repo cho task nay: khao sat truoc, lap plan, chia sub-task cho cac agent phu hop, tong hop report ngan, roi moi implement patch nho nhat. Sau cung validate dung muc va cap nhat orchestration memory neu co pattern moi.
Task: [mo ta task]
```

## 11. Prompt ngan nhat

```text
Ap dung orchestration mac dinh cua repo cho task nay truoc khi code: map -> plan -> sub-agents -> summary -> implement -> validate -> update memory.
Task: [mo ta task]
```

## 12. Vi du thuc te: them upload anh san pham

```text
Do not implement yet.
Ap dung orchestration upload/image cua repo. Kiem tra create product flow, model, service, DbContext, image/file patterns, static file config. Chia task cho `code_mapper`, `backend_engineer`, `database_engineer`, `security_reviewer`, `test_validator`, va `docs_writer` neu contract doi. Sau do tra ve:
- Relevant files and code paths
- Existing patterns to reuse
- Implementation plan
- Sub-agent task breakdown
- Risks
- Validation steps
Task: them upload anh cho product: 1 thumbnail va toi da 5 gallery images.
```
