import Database from 'better-sqlite3';

// 데이터베이스 파일 생성 및 연결
const db = new Database('database.db');

// `notice` 테이블 생성
db.exec(`
    CREATE TABLE IF NOT EXISTS notice (
      notice_seq INTEGER PRIMARY KEY AUTOINCREMENT, -- 자동 증가하는 기본 키
      title TEXT NOT NULL,                          -- 제목
      content TEXT NOT NULL,                        -- 내용
      created_date TEXT NOT NULL                    -- 생성 날짜
    )
`);