export type Pair = {
  key: string,
  value: any
}

export type CustomObject = {
  [p: string]: any
}

export type DashboardOption = 'school' | 'organisation' | 'student' | 'teacher';

export type MapperFunction = <T, U> (source: T) => U
