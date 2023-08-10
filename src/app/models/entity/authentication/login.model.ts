export interface LoginRequest {
  username: string
  password: string
  extend?: boolean
}

export interface LoginResponse {
  token: string
  username: string
}

export class LaunchResponse {
  constructor(
    public schoolId?: number,
    public organisationId?: number,
    public schoolStats?: SchoolStats
  ) {
  }
}

export interface LaunchResponse {
  schoolId?: number
  organisationId?: number
  schoolStats?: SchoolStats
}

export interface SchoolStats {
  numberOfTeachers: number,
  numberOfStudents: number,
  numberOfDepartments: number,
  numberOfApplications: number
}

export interface EntityStat {
  name: string,
  value: any,
  icon: string
}

export const EmptySchoolStats: EntityStat[] = [
  {
    name: 'Teachers',
    value: 0,
    icon: 'chalkboard-user'
  },
  {
    name: 'Students',
    value: 0,
    icon: 'user-graduate'
  },
  {
    name: 'Departments',
    value: 0,
    icon: 'building'
  },
  {
    name: 'Subjects',
    value: 0,
    icon: 'folder-open'
  }
];

export const EmptyStudentStats: EntityStat[] = [
  {
    name: $localize`Class Level`,
    value: 0,
    icon: 'chalkboard-user'
  },
  {
    name: 'Courses',
    value: 0,
    icon: 'folder-open'
  },
  {
    name: 'Current Sequence',
    value: 0,
    icon: 'user-graduate'
  },
  {
    name: 'Current Year',
    value: 0,
    icon: 'building'
  }
];
