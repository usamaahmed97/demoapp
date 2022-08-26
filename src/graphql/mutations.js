/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDepartment = /* GraphQL */ `
  mutation CreateDepartment(
    $input: CreateDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    createDepartment(input: $input, condition: $condition) {
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
export const updateDepartment = /* GraphQL */ `
  mutation UpdateDepartment(
    $input: UpdateDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    updateDepartment(input: $input, condition: $condition) {
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
export const deleteDepartment = /* GraphQL */ `
  mutation DeleteDepartment(
    $input: DeleteDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    deleteDepartment(input: $input, condition: $condition) {
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
export const createEmployee = /* GraphQL */ `
  mutation CreateEmployee(
    $input: CreateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    createEmployee(input: $input, condition: $condition) {
      id
      name
      age
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateEmployee = /* GraphQL */ `
  mutation UpdateEmployee(
    $input: UpdateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    updateEmployee(input: $input, condition: $condition) {
      id
      name
      age
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteEmployee = /* GraphQL */ `
  mutation DeleteEmployee(
    $input: DeleteEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    deleteEmployee(input: $input, condition: $condition) {
      id
      name
      age
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
      id
      name
      desc
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
      id
      name
      desc
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
      id
      name
      desc
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createCity = /* GraphQL */ `
  mutation CreateCity(
    $input: CreateCityInput!
    $condition: ModelCityConditionInput
  ) {
    createCity(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateCity = /* GraphQL */ `
  mutation UpdateCity(
    $input: UpdateCityInput!
    $condition: ModelCityConditionInput
  ) {
    updateCity(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteCity = /* GraphQL */ `
  mutation DeleteCity(
    $input: DeleteCityInput!
    $condition: ModelCityConditionInput
  ) {
    deleteCity(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createCountry = /* GraphQL */ `
  mutation CreateCountry(
    $input: CreateCountryInput!
    $condition: ModelCountryConditionInput
  ) {
    createCountry(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateCountry = /* GraphQL */ `
  mutation UpdateCountry(
    $input: UpdateCountryInput!
    $condition: ModelCountryConditionInput
  ) {
    updateCountry(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteCountry = /* GraphQL */ `
  mutation DeleteCountry(
    $input: DeleteCountryInput!
    $condition: ModelCountryConditionInput
  ) {
    deleteCountry(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
