/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDepartment = /* GraphQL */ `
  subscription OnCreateDepartment(
    $filter: ModelSubscriptionDepartmentFilterInput
  ) {
    onCreateDepartment(filter: $filter) {
      id
      name
      manager {
        id
        name
        age
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      departmentManagerId
      owner
    }
  }
`;
export const onUpdateDepartment = /* GraphQL */ `
  subscription OnUpdateDepartment(
    $filter: ModelSubscriptionDepartmentFilterInput
  ) {
    onUpdateDepartment(filter: $filter) {
      id
      name
      manager {
        id
        name
        age
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      departmentManagerId
      owner
    }
  }
`;
export const onDeleteDepartment = /* GraphQL */ `
  subscription OnDeleteDepartment(
    $filter: ModelSubscriptionDepartmentFilterInput
  ) {
    onDeleteDepartment(filter: $filter) {
      id
      name
      manager {
        id
        name
        age
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      departmentManagerId
      owner
    }
  }
`;
export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
    onCreateEmployee(filter: $filter) {
      id
      name
      age
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
    onUpdateEmployee(filter: $filter) {
      id
      name
      age
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
    onDeleteEmployee(filter: $filter) {
      id
      name
      age
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($filter: ModelSubscriptionProjectFilterInput) {
    onCreateProject(filter: $filter) {
      id
      name
      desc
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($filter: ModelSubscriptionProjectFilterInput) {
    onUpdateProject(filter: $filter) {
      id
      name
      desc
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($filter: ModelSubscriptionProjectFilterInput) {
    onDeleteProject(filter: $filter) {
      id
      name
      desc
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateCity = /* GraphQL */ `
  subscription OnCreateCity($filter: ModelSubscriptionCityFilterInput) {
    onCreateCity(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateCity = /* GraphQL */ `
  subscription OnUpdateCity($filter: ModelSubscriptionCityFilterInput) {
    onUpdateCity(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteCity = /* GraphQL */ `
  subscription OnDeleteCity($filter: ModelSubscriptionCityFilterInput) {
    onDeleteCity(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
