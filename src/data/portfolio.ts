// プロフィール情報定義.
export interface Profile{
    name: string // 名前漢字表記.
    nameEn: string // 名前ローマ字表記.
    role: string // ロール.
    school: string // 学校名.
    department: string // 専攻名.
    graduationYear: string // 卒業年度.
    bio: string // 自己紹介文.
    motto: string // モットー、座右の銘.
    avatar: string // 顔写真の画像パス.
    links:{
        github:string // githubのURL.
        twitter: string | null // X(旧Twitter).
        email: string // メールアドレス.
    }
}

// スキル.
export interface Skill {
    name: string // 名前.
    version: string | null // バージョン情報(null許容).
    level: number // スキルレベル.
    category: string // カテゴリ.
    capabilities : string // 出来ること.
    note: string | null // 実装経験.
}

// 詳細要素情報.
export interface Venue{
    name: string // 名前.
    date: string // 日時.
}

// 作品カード.
export interface Work{
    id: number // 連番.
    title: string // タイトル.
    genre: string // ジャンル.
    category: string // カテゴリ.
    thumbnail: string // サムネイル.
    screenshots: string[] // スクショ.
    description : string // 作品の概要説明.
    tags: string[] // タグ.
    platform: string[] // プラットフォーム.
    period: string // 期間.
    team: string // 制作チーム情報.
    role: string // 実装担当箇所.
    github: string // Github のURL.
    link: string | null // ゲーム公開リンク.
    venues: Venue[] // 出展・公開先.
    techPoints: string | null // 技術ポイント.
    designNotes: string | null // 設計上の工夫.
    implementationTheme: string | null // 実装解説テーマ.
    troublesooting: string | null // 詰まった問題と解決策.
    performance: string | null // パフォーマンス改善の工夫.
}

// ゲームジャム.
export interface GameJam {
    name: string // 名前.
    date: string // 日時.
    theme: string // 情報.
    description: string // 作品詳細.
    platform: string // プラットフォーム.
    role: string // 担当箇所.
    team: string // チーム情報.
    result: string | null // 結果.
    url: string | null // URL.
    reflection: string // 学び・ふりかえり.
}

export type CertStatus = "取得済み" | "受験予定" | "取得予定" | "学習中";

// 資格情報.
export interface Certification{
    name: string // 資格名.
    date: string // 日時.
    category: string // カテゴリ.
    score: string | null // スコア.
    status: CertStatus // ステータス.
}

// 年表.
export interface TimelineItem {
    year: string // 年.
    event: string // イベント.
}


export const profile: Profile = {
    name: "",
    nameEn: "",
    role: "",
    school: "",
    department: "",
    graduationYear: "",
    bio: "",
    motto: "",
    avatar: "",
    links: {
        github: "",
        twitter: null,
        email: ""
    }
}

export const skills: Skill[] = [
    {
        name: "",
        version: null,
        level: 0,
        category: "",
        capabilities: "",
        note: null
    },
]

// 作品カードの内容.
export const works: Work[] = [
    {
        id: 0,
        title: "",
        genre: "",
        category: "",
        thumbnail: "",
        screenshots: [],
        description: "",
        tags: [],
        platform: [],
        period: "",
        team: "",
        role: "",
        github: "",
        link: null,
        venues: [],
        techPoints: null,
        designNotes: null,
        implementationTheme: null,
        troublesooting: null,
        performance: null
    }, // 配列ごとに作品情報を作ってく.
]

export const gameJams: GameJam[] =[
    {
        name: "",
        date: "",
        theme: "",
        description: "",
        platform: "",
        role: "",
        team: "",
        result: null,
        url: null,
        reflection: ""
    }
]

export const certifications: Certification[] = [
    {
        name: "",
        date: "",
        category: "",
        score: null,
        status: "取得済み"
    }
]

export const timeline: TimelineItem[] =[
  {
    year: "2021年3月",
    event: "東京デザインテクノロジーセンター専門学校 卒業",
  },
  {
    year: "2021年4月",
    event: "株式会社ファンタジスタ 入社",
  },
  {
    year: "2022年9月",
    event: "開発に携わった太鼓の達人が発売",
  },
  {
    year: "2024年9月",
    event: "株式会社ファンタジスタ 退社",
  },
  {
    year: "2024年10月",
    event: "株式会社オルトプラス 入社",
  },
]