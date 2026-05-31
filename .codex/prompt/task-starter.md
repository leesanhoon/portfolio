# Task Starter

Muc dich: cung cap mau handoff nhanh de main agent su dung nhat quan cho tung loai task.

## 1. Read-only code mapping

Su dung khi: can hieu codebase truoc khi implement.

### Handoff cho `code_mapper`
- Objective: Map cac code path lien quan den task.
- Scope: Chi doc file, khong sua code.
- Constraints: Bao cao ngan, tap trung vao route, controller, service, model, DTO, config, validation, convention.
- Files to inspect: [liet ke file/thu muc nghi van]
- Expected output:
  - Findings
  - Existing patterns to reuse
  - Risks
  - File references

## 2. Backend API / CRUD task

Su dung khi: task lien quan controller, request model, service, business flow.

### Handoff cho `backend_engineer`
- Objective: Phan tich create/update/delete/get flow cho feature nay.
- Scope: Controller, request/response DTO, service, validation, error handling.
- Constraints: Uu tien pattern san co, patch nho nhat.
- Files to inspect: [controller], [service], [interfaces], [models]
- Expected output:
  - Proposed backend changes
  - Affected methods/endpoints
  - Edge cases
  - File references

## 3. Database / schema task

Su dung khi: task dong vao entity, relation, persistence, migration.

### Handoff cho `database_engineer`
- Objective: Xac dinh thay doi schema/persistence can thiet.
- Scope: Entity, DbContext, migration, constraints, delete behavior.
- Constraints: Neu khong can schema moi thi uu tien tai su dung model cu.
- Files to inspect: [models], [Data/AppDbContext.cs], [Migrations]
- Expected output:
  - Required schema/data changes
  - Migration impact
  - Integrity risks
  - File references

## 4. Upload / file / image task

Su dung khi: task lien quan IFormFile, luu file, public URL, static serving.

### Handoff cho `code_mapper`
- Objective: Tim tat ca upload/file/image/static-file patterns hien co.
- Scope: Controller, service, wwwroot, middleware, config.
- Constraints: Chi doc.
- Files to inspect: [Controllers], [Services], [Extensions], [Program.cs], [wwwroot]
- Expected output:
  - Existing upload/static-file patterns
  - Missing infrastructure
  - File references

### Handoff cho `backend_engineer`
- Objective: De xuat flow upload va mapping metadata vao domain.
- Scope: Request binding, multipart/form-data, service orchestration, response shape.
- Constraints: Giu API ro rang, toi thieu abstraction moi.
- Files to inspect: [product controller/service/model files]
- Expected output:
  - Proposed endpoint/request changes
  - Save flow
  - Error cases
  - File references

### Handoff cho `security_reviewer`
- Objective: Review validation va security cho upload flow.
- Scope: File count, size, MIME/extension, path safety, executable content, public exposure.
- Constraints: Practical controls only.
- Files to inspect: [controller/service/static file config]
- Expected output:
  - Risks
  - Required validation rules
  - Safer implementation notes
  - File references

## 5. Auth / authorization task

Su dung khi: task lien quan permissions, role, token, protected endpoint.

### Handoff cho `security_reviewer`
- Objective: Review auth/authz impact cua task.
- Scope: Endpoint protection, policy, data exposure, privilege boundaries.
- Constraints: Ngan gon, muc do risk ro rang.
- Files to inspect: [controllers], [Program.cs], [auth-related services]
- Expected output:
  - Access control risks
  - Required protections
  - File references

### Handoff cho `backend_engineer`
- Objective: De xuat thay doi can thiet de enforcement dung cho API.
- Scope: Attributes, service checks, error responses.
- Constraints: Dung theo convention san co.
- Files to inspect: [protected endpoints/services]
- Expected output:
  - Backend enforcement plan
  - Affected endpoints
  - File references

## 6. Refactor task

Su dung khi: muon doi cau truc nho ma khong doi hanh vi.

### Handoff cho `code_mapper`
- Objective: Xac dinh pattern cu va pham vi tac dong cua refactor.
- Scope: Dependency chain, call sites, duplicated logic.
- Constraints: Chi doc.
- Files to inspect: [target files]
- Expected output:
  - Refactor boundaries
  - Reuse opportunities
  - Risks
  - File references

### Handoff cho `test_validator`
- Objective: Xac dinh regression scope cho refactor.
- Scope: Related tests/build path.
- Constraints: Uu tien validation hep nhat.
- Files to inspect: [tests if any], [changed feature files]
- Expected output:
  - Validation plan
  - Regression focus
  - File references

## 7. Bug fix task

Su dung khi: task la sua loi, can khoanh vung nguyen nhan.

### Handoff cho `code_mapper`
- Objective: Trace flow gay ra bug tu input den output.
- Scope: Read-only root-cause mapping.
- Constraints: Bao cao evidence, khong doan mo ho.
- Files to inspect: [bug-related files]
- Expected output:
  - Likely root cause
  - Data flow notes
  - File references

### Handoff cho `backend_engineer`
- Objective: De xuat fix tai root cause.
- Scope: Controller/service/domain logic.
- Constraints: Khong fix bug khac khong lien quan.
- Files to inspect: [bug-related files]
- Expected output:
  - Root-cause fix proposal
  - Edge cases
  - File references

### Handoff cho `test_validator`
- Objective: Xac dinh cach reproduce va validate bug fix.
- Scope: Narrow validation first.
- Constraints: Khong mo rong qua muc.
- Files to inspect: [relevant tests/feature files]
- Expected output:
  - Repro steps
  - Validation steps
  - Regression focus

## 8. Test / validation task

Su dung khi: user muon them test, sua test, hoac validate thay doi.

### Handoff cho `test_validator`
- Objective: Xac dinh muc test/build/check phu hop nhat.
- Scope: Unit/integration/build/regression.
- Constraints: Bat dau hep, sau do mo rong neu can.
- Files to inspect: [changed files], [test project if any]
- Expected output:
  - Recommended commands
  - Coverage gaps
  - Regression focus

## 9. Documentation task

Su dung khi: task can note API, README, implementation summary.

### Handoff cho `docs_writer`
- Objective: Xac dinh tai lieu nao can cap nhat.
- Scope: README, API note, setup note, change summary.
- Constraints: Chi cap nhat phan lien quan den behavior/contract thay doi.
- Files to inspect: [README], [changed API files]
- Expected output:
  - Doc updates needed
  - Short summary text
  - File references

## 10. Main agent synthesis template

Sau khi nhan report tu sub-agents, main agent tong hop theo mau:
- Relevant files and code paths
- Existing patterns to reuse
- Decision
- Minimal implementation plan
- Risks
- Validation plan

## 11. Fast routing cheatsheet

- CRUD/API: `code_mapper` + `backend_engineer`
- CRUD/API + DB: them `database_engineer`
- Upload/Image/File: them `security_reviewer`
- Auth/permission: `security_reviewer` + `backend_engineer`
- Bug fix: `code_mapper` + `backend_engineer` + `test_validator`
- Refactor: `code_mapper` + `test_validator`
- Contract/doc impact: them `docs_writer`
