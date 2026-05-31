# Project Context

## Repo profile
- Stack: Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4
- Architecture: Full-stack Next.js app voi App Router UI 
- Main modules: portfolio landing page, experience/profile sections, PUBG mortar training page, contact API, category API, product API

## Working style
- Uu tien thay doi nho, dung pattern san co.
- Khong sua file khong lien quan.
- Kiem tra route handler, React component, model Mongoose, DB helper, config truoc khi code.
- Neu task khong trivial, lap plan truoc khi sua.

## Build and validation commands
- Dev: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`
- Package manager hien tai: `npm` (`package-lock.json` la lockfile dang dung)

## Validation preference
- Chay validation hep truoc, mo rong sau.
- Uu tien lint theo file/pham vi thay doi neu kha thi, sau do chay `npm run build` khi can xac nhan App Router + typing + bundling.

## Repo-specific notes
- API dung App Router route handlers trong `src/app/api/**/route.ts`, khong dung Pages Router API.
- Models Mongoose nam trong `src/models`, tranh khai bao lai schema trong route handlers.
- Repo hien khong thay test framework rieng; validation mac dinh la lint + build + smoke check theo task.
- Can than khi sua `src/app/layout.tsx`, `src/app/globals.css`, va cac route API dang dung vi anh huong truc tiep toan app.
