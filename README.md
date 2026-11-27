# Tacloban Mission

타클로반 선교 홍보 및 운영을 위한 반응형 웹사이트 프로젝트입니다.

## 기술 스택

- Next.js App Router
- React + TypeScript
- CSS 기반 디자인 토큰 및 반응형 UI
- Lucide React 아이콘
- Motion 애니메이션
- Supabase (데이터베이스, 인증, 파일 저장 예정)
- MapLibre GL JS (지도 기능 예정)

## 시작하기

```bash
npm install
cp .env.example .env.local
npm run dev
```

브라우저에서 http://localhost:3000 을 엽니다.

## 환경 변수

Supabase 연동 전까지는 환경 변수 없이 홈 화면을 확인할 수 있습니다.

- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY

실제 배포 시 Supabase 대시보드에서 발급한 값으로 설정하세요. Secret/Service Role 키는 절대 NEXT_PUBLIC_ 접두사를 붙이거나 브라우저 코드에 노출하지 마세요.

## 현재 구현 범위

- Apple 스타일의 미니멀 인터페이스
- Tropical / Ocean / Youth / Pastel 테마 전환
- 글래스 모피즘 사이드 메뉴
- 홈 화면, 자세히 보기 및 신청 버튼의 기본 동선
- 출국일 설정 전 안내 상태를 표시하는 D-Day 영역
- 모바일 및 데스크톱 반응형 레이아웃

일정, 갤러리, CCM, 항공편, 관리자 CMS는 다음 개발 단계에서 Supabase와 연결합니다.

## 개발 원칙

1. 콘텐츠는 코드에 하드코딩하지 않고 추후 Supabase 데이터로 이전합니다.
2. 관리자 권한은 서버 측 인증과 데이터베이스 RLS로 보호합니다.
3. 갤러리 파일 접근 권한은 UI뿐 아니라 Storage 정책에서도 검사합니다.
4. 업로드 파일은 크기와 MIME 타입을 검증합니다.
5. 음악 재생은 사용자의 명시적인 재생 동작 이후 시작합니다.
