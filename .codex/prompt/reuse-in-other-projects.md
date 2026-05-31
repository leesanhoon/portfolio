# Reusing This Codex Orchestration In Other Projects

Muc dich: huong dan ap dung bo orchestration hien tai cho bat ky repo khac khi dung Codex CLI.

## 1. Ban chat cua giai phap nay

Bo nay khong phai mot feature he thong tu dong cai vao Codex CLI toan cuc.
No la mot bo quy uoc trong repo gom:
- `AGENTS.md` de buoc agent ton trong workflow cua repo
- `.codex/prompt/*.md` de co prompt khoi dong va mau handoff
- `.codex/memory/*.md` de nho lai context va pattern sau moi task
- `.codex/agents/*.md` de mo ta vai tro cac specialist agents

Muon ap dung cho repo khac, ban sao chep bo khung nay vao repo do, roi tuy chinh theo stack va quy uoc cua du an.

## 2. Bo file toi thieu can co trong repo moi

Toi thieu nen tao:
- `AGENTS.md`
- `.codex/prompt/init.md`
- `.codex/prompt/task-starter.md`
- `.codex/prompt/quick-commands.md`
- `.codex/prompt/compact-resume.md`
- `.codex/memory/project-context.md`
- `.codex/memory/orchestration-memory.md`
- `.codex/agents/code_mapper.md`
- `.codex/agents/backend_engineer.md`
- `.codex/agents/database_engineer.md`
- `.codex/agents/security_reviewer.md`
- `.codex/agents/test_validator.md`
- `.codex/agents/docs_writer.md`

Neu muon day du hon, them:
- `.codex/prompt/examples.md`
- `.codex/templates/task-routing.md`

## 3. Quy trinh ap dung cho repo moi

### Buoc 1: Tao bo khung thu muc
Tao cac thu muc:
- `.codex/agents`
- `.codex/prompt`
- `.codex/memory`
- `.codex/templates`

### Buoc 2: Them `AGENTS.md`
File nay la cau noi de moi task trong repo tu dong bam workflow orchestration.
No nen noi ro:
- Khi nao phai khao sat truoc khi code
- Khi nao phai lap plan
- Khi nao can sub-agents
- Cach tong hop report
- Quy tac edit/validate

### Buoc 3: Viet `project-context.md`
Day la file quan trong nhat khi dem sang repo moi.
Hay thay noi dung cho phu hop du an:
- stack cong nghe
- kieu kien truc
- convention dat ten
- cach test/build
- cac vung nhay cam can tranh sua

Vi du:
- ASP.NET Core + EF Core + Controllers + Services
- Node.js + Express + Prisma
- Next.js + App Router + Server Actions
- Python FastAPI + SQLAlchemy

### Buoc 4: Chinh `init.md`
File nay mo ta workflow chung ma main agent phai lam theo.
Ban co the giu khung chung, chi sua:
- ten stack
- danh sach agents uu tien
- rule routing theo loai task
- cach cap nhat memory

### Buoc 5: Chinh `task-starter.md`
Day la tap mau handoff.
Hay them cac loai task hay gap trong du an moi, vi du:
- frontend component/page task
- background job task
- queue/worker task
- infra/config task
- mobile/API integration task

### Buoc 6: Chinh `examples.md`
Them vi du thuc te sat voi repo moi nhat co the.
Vi du:
- “them login voi JWT”
- “them upload avatar”
- “them trang admin CRUD user”
- “sua bug order duplicate”

Examples cang sat repo, Codex cang de bat dung workflow.

### Buoc 7: Chinh `quick-commands.md`
Them cac prompt mau ma ban thuong paste nhat.
Nen co 4 loai:
- planning only
- implement after plan
- bug fix
- compact resume

### Buoc 8: Cap nhat `orchestration-memory.md` theo thoi gian
Sau moi vai task, them vao do:
- pattern lap lai
- rule routing moi
- validation lesson
- anti-pattern can tranh

File nay chinh la “bo nho ng?n h?n dai han” cua repo.

## 4. Cach chon 6 agents cho repo moi

Bo 6 agent hien tai hop cho backend/web app kha pho bien.
Nhung repo khac co the doi ten hoac doi vai tro.

### Bo 6 agent chung de bat dau
- `code_mapper`
- `backend_engineer`
- `database_engineer`
- `security_reviewer`
- `test_validator`
- `docs_writer`

### Neu repo nghien ve frontend
Co the doi thanh:
- `code_mapper`
- `frontend_engineer`
- `backend_engineer`
- `state_manager`
- `test_validator`
- `docs_writer`

### Neu repo fullstack lon
Co the dung:
- `code_mapper`
- `frontend_engineer`
- `backend_engineer`
- `database_engineer`
- `security_reviewer`
- `test_validator`

### Neu repo data/AI
Co the dung:
- `code_mapper`
- `ml_engineer`
- `data_engineer`
- `backend_engineer`
- `test_validator`
- `docs_writer`

Nguyen tac: chi giu 5-6 vai tro that su lap lai nhieu nhat trong repo.

## 5. Cach prompt khi vao repo moi

Khi moi bat dau trong repo moi, paste mot cau nhu sau:

```text
Doc `AGENTS.md` va cac file trong `.codex/prompt` + `.codex/memory` truoc. Ap dung orchestration mac dinh cua repo: khao sat truoc, lap plan, chia sub-task cho agents phu hop, chi implement sau khi da co evidence, validate dung muc, va cap nhat memory neu co pattern moi. Task: [mo ta task]
```

Neu chua co bo file, hay tao truoc roi moi dung lenh nay.

## 6. Cach bootstrap nhanh cho repo moi

Ban co 3 cach:

### Cach A: copy thu cong
1. Copy ca thu muc `.codex` tu repo nay sang repo moi.
2. Copy `AGENTS.md`.
3. Sua noi dung `project-context.md`.
4. Sua lai examples cho dung domain.
5. Bat dau dung.

### Cach B: nh? Codex tao
Trong repo moi, paste prompt:

```text
Hay tao cho repo nay mot bo Codex orchestration giong repo mau cua toi, gom `AGENTS.md`, `.codex/agents`, `.codex/prompt`, `.codex/memory`, `.codex/templates`. Truoc tien hay inspect stack, structure, testing conventions cua repo roi moi scaffold cac file cho phu hop.
```

### Cach C: tao template “starter pack”
Ban co the tao mot thu muc mau o ngoai repo, vi du:
- `D:\CodexStarter\AGENTS.md`
- `D:\CodexStarter\.codex\...`

Moi khi tao repo moi, copy starter pack vao.

## 7. Nhung phan can tuy chinh theo tung du an

Khong nen giu nguyen 100% cho moi repo. Can sua it nhat:
- stack trong `project-context.md`
- validation/build commands
- loai agents phu hop
- examples sat domain
- routing rules theo task cua repo
- file/path conventions

Vi du:
- Repo .NET thi uu tien controller/service/DbContext/build `dotnet build`
- Repo Node thi uu tien route/service/schema + `npm test`/`npm run build`
- Repo frontend thi uu tien component/page/state/test UI

## 8. Gioi han can hieu ro

- Codex CLI khong co “global memory” tu dong cho moi repo, tru khi ban tu copy bo nay vao repo do.
- Viec “tu dong dung orchestration cho moi task” phu thuoc vao:
  - `AGENTS.md` cua repo
  - cach ban khoi dong task
  - va viec main agent co doc cac file `.codex/*` tu dau hay khong
- `orchestration-memory.md` la memory cap repo, khong phai memory toan may.

## 9. Best practice de dung lau dai

- Giu `AGENTS.md` ngan nhung ro.
- Giu `init.md` o muc default workflow.
- Giu `examples.md` sat cac task that su hay gap.
- Moi memory rule chi them khi lap lai it nhat 2 lan.
- Dung prompt mau tu `quick-commands.md` va `compact-resume.md` de dong nhat hanh vi.
- Dinh ky don dep memory, tranh viet qua dai va qua mo ho.

## 10. Checklist copy sang repo moi

- [ ] Tao `AGENTS.md`
- [ ] Tao `.codex/agents`
- [ ] Tao `.codex/prompt`
- [ ] Tao `.codex/memory`
- [ ] Tao `.codex/templates`
- [ ] Dien `project-context.md` theo stack moi
- [ ] Sua `init.md` theo workflow mong muon
- [ ] Sua `examples.md` theo use case thuc te
- [ ] Sua `quick-commands.md` theo cach ban thuong prompt
- [ ] Them command build/test dung cho repo moi
- [ ] Bat dau bang 1 task planning-only de kiem tra bo orchestration

## 11. Prompt mau de Codex tu scaffold cho repo khac

```text
Hay tao cho repo nay mot bo orchestration Codex tai repo level, co the tai su dung sau moi lan compact. Gom:
- `AGENTS.md`
- `.codex/agents/*.md`
- `.codex/prompt/init.md`
- `.codex/prompt/task-starter.md`
- `.codex/prompt/examples.md`
- `.codex/prompt/quick-commands.md`
- `.codex/prompt/compact-resume.md`
- `.codex/memory/project-context.md`
- `.codex/memory/orchestration-memory.md`
- `.codex/templates/task-routing.md`

Truoc khi tao, hay inspect repo structure, stack, build/test conventions, va de xuat bo 5-6 agents phu hop nhat. Sau do scaffold file voi noi dung da duoc localize cho repo nay.
```

## 12. Neu ban muon dung cho moi repo tren may

Co 2 cach thuc te:
- Cach an toan: moi repo deu co bo rieng trong chinh repo do.
- Cach nang cao: tao mot starter pack ngoai repo de copy vao moi du an moi.

Cach an toan van tot hon, vi moi repo co stack, rules va memory rieng.
