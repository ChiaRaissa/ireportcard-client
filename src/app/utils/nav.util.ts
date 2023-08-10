import {NavItem, NavItemGroup} from "../modules/library/navigation/models/nav-item.model";
import {TreeNode} from "primeng/api";



export module NavUtil {
  const appUser: NavItem = {
    code: "user-nav",
    label: "User",
    icon: "user",
    link: "/app/user",
    children: [
      {
        label: "Profile",
        icon: "id-badge",
        link: "/app/user/profile",
      }
    ]
  }

  const appOrganisationDashboard: NavItem = {
    code: "org-dashboard-nav",
    label: "Dashboard",
    icon: "bi bi-grid",
    link: '/app/organisation'
  }
  const appOrganisationMembers: NavItem = {
    code: "members-nav",
    label: "Members",
    icon: "users",
    link: '/app/organisation/members',
    children: [
      {
        label: "Add Admin",
        icon: "user-plus",
        link: "/app/organisation/members/add-admin",
      },
      {
        label: "Add Staff",
        icon: "user-plus",
        link: "/app/organisation/members/add-staff",
      },
    ]
  }
  const appOrganisationSchools: NavItem = {
    code: "schools-nav",
    label: "Schools",
    icon: "school",
    link: '/app/organisation/schools',
    children: [
      {
        label: "Add School",
        icon: "school-circle-check",
        link: "/app/organisation/schools/add",
      },
      {
        label: "View School",
        icon: "school-circle-check",
        link: "/app/organisation/schools/view",
      },
    ]
  }

  const appSchoolDashboard: NavItem = {
    code: "school-dashboard-nav",
    label: "Dashboard",
    icon: "bi bi-grid",
    link: '/app/school'
  }
  const appSchoolAcademicCycle: NavItem = {
    code: "school-academic-cycle-nav",
    label: "Academic Cycle",
    icon: "arrows-spin",
    link: '/app/school/academic-cycle',
    children: []
  }
  const appSchoolStudents: NavItem = {
    code: "student-nav",
    label: "Students",
    icon: "people-arrows",
    link: '/app/school/students',
    children: [
      {
        label: "Add Student",
        icon: "person-circle-plus",
        link: "/app/school/students/add",
      }
    ]
  }
  const appSchoolTeachers: NavItem = {
    code: "student-nav",
    label: "Teachers",
    icon: "person-chalkboard",
    link: '/app/school/teachers',
    children: [
      {
        label: "Add Teacher",
        icon: "user-plus",
        link: "/app/school/teachers/add",
      }
    ]
  }
  const appSchoolDepartments: NavItem = {
    code: "departments-nav",
    label: "Departments",
    icon: "landmark",
    link: '/app/school/departments',
    children: [
      {
        label: "Add",
        icon: "square-plus",
        link: "/app/school/departments/add",
      },
      {
        label: "View",
        icon: "square-plus",
        link: "/app/school/departments/view",
      }
    ]
  }
  const appSchoolClasses: NavItem = {
    code: "class-nav",
    label: "Classes",
    icon: "users-rectangle",
    link: '/app/school/classes',
    children: [
      {
        label: "Add Class",
        icon: "square-plus",
        link: "/app/school/classes/add",
      },
      {
        label: "View",
        icon: "square-plus",
        link: "/app/school/classes/view",
      }
    ]
  }
  const appSchoolCourses: NavItem = {
    code: "course-nav",
    label: "Courses",
    icon: "book",
    link: '/app/school/courses',
    children: [
      {
        label: "Add Course",
        icon: "book",
        link: "/app/school/courses/add",
      }
    ]
  }
  const appSchoolSettings: NavItem = {
    code: "school-settings-nav",
    label: "Settings",
    icon: "gear",
    link: '/app/school/settings'
  }
  const appStudentHome: NavItem = {
    code: "student-dashboard-nav",
    label: "Home",
    icon: "home",
    link: '/app/student'
  }
  const appStudentAcademic: NavItem = {
    code: "student-academic-nav",
    label: "Academic",
    icon: "file",
    link: '/app/student/academic'
  }
  const appStudentApplications: NavItem = {
    code: "student-application-nav",
    label: "Applications",
    icon: "file",
    link: '/app/student/applications'
  }
  const appStudentCourses: NavItem = {
    code: "student-courses-nav",
    label: "Courses",
    icon: "book-open-reader",
    link: '/app/student/courses'
  }
  const appStudentSettings: NavItem = {
    code: "student-settings-nav",
    label: "Settings",
    icon: "gear",
    link: '/app/student/settings'
  }

  const appTeacherDashboard: NavItem = {
    code: "teacher-dashboard-nav",
    label: "Dashboard",
    icon: "bi bi-grid",
    link: '/app/teacher'
  }
  const appTeacherAttendance: NavItem = {
    code: "teacher-class-list-nav",
    label: "Attendance",
    icon: "calendar-check",
    link: '/app/teacher/attendance'
  }
  const appTeacherClassList: NavItem = {
    code: "teacher-class-list-nav",
    label: "Class List",
    icon: "table-list",
    link: '/app/teacher/class-list'
  }

  export const ORGANISATION_ADMIN_NAV_GROUP = new NavItemGroup("", [
    appOrganisationDashboard,
    appOrganisationMembers,
    appOrganisationSchools,
    appUser
  ]);
  export const SCHOOL_ADMIN_NAV_GROUP = new NavItemGroup("", [
    appSchoolDashboard,
    appSchoolAcademicCycle,
    appSchoolStudents,
    appSchoolTeachers,
    appSchoolDepartments,
    appSchoolClasses,
    appSchoolCourses,
    appSchoolSettings,
  ]);
  export const STUDENT_NAV_GROUP = new NavItemGroup("Student", [
    appStudentHome,
    appStudentAcademic,
    appStudentApplications,
    appStudentCourses,
    appStudentSettings
  ]);

  export const TEACHER_NAV_GROUP = new NavItemGroup("Teacher", [
    appTeacherDashboard,
    appTeacherAttendance,
    appTeacherClassList
  ]);

  const navItemToTreeNode = (navItem: NavItem): TreeNode => {
    return <TreeNode>{
      label: navItem.label,
      icon: `fas fa-light fa-${navItem.icon}`,
      key: navItem.code,
      data: navItem.link,
      children: navItem.children?.map(navItemToTreeNode)
    }
  }

  export const ORGANISATION_ADMIN_NAV_TREE: TreeNode[] = ORGANISATION_ADMIN_NAV_GROUP.navItems.map(navItemToTreeNode);
  export const SCHOOL_ADMIN_NAV_TREE: TreeNode[] = SCHOOL_ADMIN_NAV_GROUP.navItems.map(navItemToTreeNode);
  export const STUDENT_NAV_TREE: TreeNode[] = STUDENT_NAV_GROUP.navItems.map(navItemToTreeNode);
  export const TEACHER_NAV_TREE: TreeNode[] = TEACHER_NAV_GROUP.navItems.map(navItemToTreeNode);
}

