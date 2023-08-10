import {environment} from "../environments/environment";

export const AppEndpoints: AppEndpointType = {
  main: environment.apiUrl,
  academic_cycle: {
    main: '/academic-cycle',
    year: {
      main: '/year'
    },
    term: {
      main: '/term'
    },
    sequence: {
      main: '/sequence'
    }
  },
  attendance: {
    main: '/attendance'
  },
  auth: {
    main: '/auth',
    login: {
      main: '/login'
    },
    register: {
      main: '/register'
    },
    check: {
      main: '/check'
    }
  },
  class_level: {
    main: '/class-level'
  },
  department: {
    main: '/department'
  },
  launch: {
    main: '/launch'
  },
  user: {
    main: '/user'
  },
  section: {
    main: '/section'
  },
  school: {
    main: '/school',
    staff: {
      main: '/school-staff'
    }
  },
  school_setting: {
    main: '/school-setting',
  },
  student_application: {
    main: '/student-application'
  },
  student_application_trial: {
    main: '/student-application-trial'
  },
  student_class_list: {
    main: '/student-class-list'
  },
  subject: {
    main: '/subject'
  },
  organisation: {
    main: '/organisation'
  }
}


type AppEndpointType = {
  [c: string]: string | AppEndpointType
  main: string,
}

enum AppEndpointKey {
  ACADEMIC_CYCLE = 'academic_cycle',
  ACADEMIC_CYCLE_SEQUENCE = 'academic_cycle.sequence',
  ACADEMIC_CYCLE_TERM = 'academic_cycle.term',
  ACADEMIC_CYCLE_YEAR = 'academic_cycle.year',
  ATTENDANCE = 'attendance',
  AUTH_CHECK = 'auth.check',
  AUTH_LOGIN = "auth.login",
  AUTH_REGISTER = "auth.register",
  CLASS_LEVEL = 'class_level',
  LAUNCH = "launch",
  SCHOOL = 'school',
  SCHOOL_STAFF = 'school.staff',
  USER = 'user',
  SECTION = 'section',
  SUBJECT = 'subject',
  DEPARTMENT = 'department',
  STUDENT_APPLICATION = 'student_application',
  STUDENT_APPLICATION_TRIAL = 'student_application_trial',
  STUDENT_CLASS_LIST = 'student_class_list',
  TERM = 'academic_cycle.term',
  SEQUENCE = 'academic_cycle.sequence',
  ORGANISATION = 'organisation'
}

export class AppEndpoint {
  private _base: string = "";
  private _path: string = "";
  private readonly _url: string

  static ACADEMIC_CYCLE = new AppEndpoint(AppEndpointKey.ACADEMIC_CYCLE);
  static ACADEMIC_CYCLE_SEQUENCE = new AppEndpoint(AppEndpointKey.ACADEMIC_CYCLE_SEQUENCE);
  static ACADEMIC_CYCLE_TERM = new AppEndpoint(AppEndpointKey.ACADEMIC_CYCLE_TERM);
  static ACADEMIC_CYCLE_YEAR = new AppEndpoint(AppEndpointKey.ACADEMIC_CYCLE_YEAR);
  static ATTENDANCE = new AppEndpoint(AppEndpointKey.ATTENDANCE);
  static AUTH_LOGIN = new AppEndpoint(AppEndpointKey.AUTH_LOGIN);
  static AUTH_REGISTER = new AppEndpoint(AppEndpointKey.AUTH_REGISTER);
  static AUTH_CHECK = new AppEndpoint(AppEndpointKey.AUTH_CHECK);
  static CLASS_LEVEL = new AppEndpoint(AppEndpointKey.CLASS_LEVEL);
  static DEPARTMENT = new AppEndpoint(AppEndpointKey.DEPARTMENT);
  static LAUNCH = new AppEndpoint(AppEndpointKey.LAUNCH);
  static SCHOOL = new AppEndpoint(AppEndpointKey.SCHOOL);
  static SCHOOL_STAFF = new AppEndpoint(AppEndpointKey.SCHOOL_STAFF);
  static SCHOOL_SETTING = new AppEndpoint('school_setting');
  static SECTION = new AppEndpoint(AppEndpointKey.SECTION);
  static SUBJECT = new AppEndpoint(AppEndpointKey.SUBJECT);
  static USER = new AppEndpoint(AppEndpointKey.USER);
  static STUDENT_APPLICATION = new AppEndpoint(AppEndpointKey.STUDENT_APPLICATION);
  static STUDENT_APPLICATION_TRIAL = new AppEndpoint(AppEndpointKey.STUDENT_APPLICATION_TRIAL);
  static STUDENT_CLASS_LIST = new AppEndpoint(AppEndpointKey.STUDENT_CLASS_LIST);
  static TERM = new AppEndpoint(AppEndpointKey.TERM);
  static SEQUENCE = new AppEndpoint(AppEndpointKey.SEQUENCE);
  static ORGANISATION = new AppEndpoint(AppEndpointKey.ORGANISATION);

  constructor(key: string | AppEndpointKey) {
    this._url = this.constructUrl(key);
    this.validate();
  }

  get url() {
    return this._url;
  }

  private validate = () => {
    if (this._path.includes("//")) {
      throw new Error(`Invalid endpoint path: ${this._path}`);
    }
  }

  private constructUrl = (key: string) => {
    let endpoint = AppEndpoints;
    this._base = endpoint.main
    const segments = key.split('.');
    const mains: string[] = [];
    segments.forEach(s => {
      const n = endpoint[s];
      if (typeof n === 'string' || n == undefined) {
      } else {
        endpoint = n;
      }
      mains.push(endpoint.main);
    });
    this._path = mains.join('');
    return `${this._base}${this._path}`;
  }
}
