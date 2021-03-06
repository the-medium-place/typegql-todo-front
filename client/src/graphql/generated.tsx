import { gql } from '@apollo/client';
import * as React from 'react';
import * as Apollo from '@apollo/client';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Auth object containt JWT and User info */
export type AuthType = {
  __typename?: 'AuthType';
  token: Scalars['String'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  addTodo: Array<Todo>;
  createUser: AuthType;
  deleteTodo: Array<Todo>;
  loginUser: AuthType;
  updateComplete: Array<Todo>;
};


export type MutationAddTodoArgs = {
  input: Scalars['String'];
  userid: Scalars['String'];
};


export type MutationCreateUserArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationDeleteTodoArgs = {
  id: Scalars['String'];
};


export type MutationLoginUserArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationUpdateCompleteArgs = {
  id: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  allTodos: Array<Todo>;
  allUsers: Array<User>;
  countTodos: Scalars['Int'];
  oneTodo: Todo;
  oneUser: User;
};


export type QueryOneTodoArgs = {
  id: Scalars['String'];
};


export type QueryOneUserArgs = {
  id: Scalars['String'];
};

export type Todo = {
  __typename?: 'Todo';
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  isComplete: Scalars['Boolean'];
  todoContent: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  password: Scalars['String'];
  todos: Array<Todo>;
  username: Scalars['String'];
};

export type TodoInfoFragment = { __typename?: 'Todo', id: string, todoContent: string, createdAt: string, isComplete: boolean };

export type GetOneTodosQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetOneTodosQuery = { __typename?: 'Query', oneTodo: { __typename?: 'Todo', id: string, todoContent: string, createdAt: string, isComplete: boolean } };

export type AllTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTodosQuery = { __typename?: 'Query', allTodos: Array<{ __typename?: 'Todo', id: string, todoContent: string, createdAt: string, isComplete: boolean }> };

export type AddTodoMutationVariables = Exact<{
  input: Scalars['String'];
  userid: Scalars['String'];
}>;


export type AddTodoMutation = { __typename?: 'Mutation', addTodo: Array<{ __typename?: 'Todo', id: string, todoContent: string, createdAt: string, isComplete: boolean }> };

export type UpdateCompleteMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type UpdateCompleteMutation = { __typename?: 'Mutation', updateComplete: Array<{ __typename?: 'Todo', id: string, todoContent: string, createdAt: string, isComplete: boolean }> };

export type DeleteTodoMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteTodoMutation = { __typename?: 'Mutation', deleteTodo: Array<{ __typename?: 'Todo', id: string, todoContent: string, createdAt: string, isComplete: boolean }> };

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename?: 'Query', allUsers: Array<{ __typename?: 'User', id: string, username: string }> };

export type GetOneUserQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetOneUserQuery = { __typename?: 'Query', oneUser: { __typename?: 'User', id: string, username: string, todos: Array<{ __typename?: 'Todo', id: string, todoContent: string, createdAt: string, isComplete: boolean }> } };

export type CreateUserMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'AuthType', token: string, user: { __typename?: 'User', id: string, username: string } } };

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'AuthType', token: string, user: { __typename?: 'User', id: string, username: string } } };

export const TodoInfoFragmentDoc = gql`
    fragment TodoInfo on Todo {
  id
  todoContent
  createdAt
  isComplete
}
    `;
export const GetOneTodosDocument = gql`
    query GetOneTodos($id: String!) {
  oneTodo(id: $id) {
    ...TodoInfo
  }
}
    ${TodoInfoFragmentDoc}`;
export type GetOneTodosComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetOneTodosQuery, GetOneTodosQueryVariables>, 'query'> & ({ variables: GetOneTodosQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetOneTodosComponent = (props: GetOneTodosComponentProps) => (
      <ApolloReactComponents.Query<GetOneTodosQuery, GetOneTodosQueryVariables> query={GetOneTodosDocument} {...props} />
    );
    

/**
 * __useGetOneTodosQuery__
 *
 * To run a query within a React component, call `useGetOneTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneTodosQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOneTodosQuery(baseOptions: Apollo.QueryHookOptions<GetOneTodosQuery, GetOneTodosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOneTodosQuery, GetOneTodosQueryVariables>(GetOneTodosDocument, options);
      }
export function useGetOneTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOneTodosQuery, GetOneTodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOneTodosQuery, GetOneTodosQueryVariables>(GetOneTodosDocument, options);
        }
export type GetOneTodosQueryHookResult = ReturnType<typeof useGetOneTodosQuery>;
export type GetOneTodosLazyQueryHookResult = ReturnType<typeof useGetOneTodosLazyQuery>;
export type GetOneTodosQueryResult = Apollo.QueryResult<GetOneTodosQuery, GetOneTodosQueryVariables>;
export const AllTodosDocument = gql`
    query AllTodos {
  allTodos {
    ...TodoInfo
  }
}
    ${TodoInfoFragmentDoc}`;
export type AllTodosComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllTodosQuery, AllTodosQueryVariables>, 'query'>;

    export const AllTodosComponent = (props: AllTodosComponentProps) => (
      <ApolloReactComponents.Query<AllTodosQuery, AllTodosQueryVariables> query={AllTodosDocument} {...props} />
    );
    

/**
 * __useAllTodosQuery__
 *
 * To run a query within a React component, call `useAllTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllTodosQuery(baseOptions?: Apollo.QueryHookOptions<AllTodosQuery, AllTodosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllTodosQuery, AllTodosQueryVariables>(AllTodosDocument, options);
      }
export function useAllTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllTodosQuery, AllTodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllTodosQuery, AllTodosQueryVariables>(AllTodosDocument, options);
        }
export type AllTodosQueryHookResult = ReturnType<typeof useAllTodosQuery>;
export type AllTodosLazyQueryHookResult = ReturnType<typeof useAllTodosLazyQuery>;
export type AllTodosQueryResult = Apollo.QueryResult<AllTodosQuery, AllTodosQueryVariables>;
export const AddTodoDocument = gql`
    mutation AddTodo($input: String!, $userid: String!) {
  addTodo(input: $input, userid: $userid) {
    ...TodoInfo
  }
}
    ${TodoInfoFragmentDoc}`;
export type AddTodoMutationFn = Apollo.MutationFunction<AddTodoMutation, AddTodoMutationVariables>;
export type AddTodoComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddTodoMutation, AddTodoMutationVariables>, 'mutation'>;

    export const AddTodoComponent = (props: AddTodoComponentProps) => (
      <ApolloReactComponents.Mutation<AddTodoMutation, AddTodoMutationVariables> mutation={AddTodoDocument} {...props} />
    );
    

/**
 * __useAddTodoMutation__
 *
 * To run a mutation, you first call `useAddTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTodoMutation, { data, loading, error }] = useAddTodoMutation({
 *   variables: {
 *      input: // value for 'input'
 *      userid: // value for 'userid'
 *   },
 * });
 */
export function useAddTodoMutation(baseOptions?: Apollo.MutationHookOptions<AddTodoMutation, AddTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddTodoMutation, AddTodoMutationVariables>(AddTodoDocument, options);
      }
export type AddTodoMutationHookResult = ReturnType<typeof useAddTodoMutation>;
export type AddTodoMutationResult = Apollo.MutationResult<AddTodoMutation>;
export type AddTodoMutationOptions = Apollo.BaseMutationOptions<AddTodoMutation, AddTodoMutationVariables>;
export const UpdateCompleteDocument = gql`
    mutation UpdateComplete($id: String!) {
  updateComplete(id: $id) {
    ...TodoInfo
  }
}
    ${TodoInfoFragmentDoc}`;
export type UpdateCompleteMutationFn = Apollo.MutationFunction<UpdateCompleteMutation, UpdateCompleteMutationVariables>;
export type UpdateCompleteComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateCompleteMutation, UpdateCompleteMutationVariables>, 'mutation'>;

    export const UpdateCompleteComponent = (props: UpdateCompleteComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateCompleteMutation, UpdateCompleteMutationVariables> mutation={UpdateCompleteDocument} {...props} />
    );
    

/**
 * __useUpdateCompleteMutation__
 *
 * To run a mutation, you first call `useUpdateCompleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCompleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCompleteMutation, { data, loading, error }] = useUpdateCompleteMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateCompleteMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCompleteMutation, UpdateCompleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCompleteMutation, UpdateCompleteMutationVariables>(UpdateCompleteDocument, options);
      }
export type UpdateCompleteMutationHookResult = ReturnType<typeof useUpdateCompleteMutation>;
export type UpdateCompleteMutationResult = Apollo.MutationResult<UpdateCompleteMutation>;
export type UpdateCompleteMutationOptions = Apollo.BaseMutationOptions<UpdateCompleteMutation, UpdateCompleteMutationVariables>;
export const DeleteTodoDocument = gql`
    mutation DeleteTodo($id: String!) {
  deleteTodo(id: $id) {
    ...TodoInfo
  }
}
    ${TodoInfoFragmentDoc}`;
export type DeleteTodoMutationFn = Apollo.MutationFunction<DeleteTodoMutation, DeleteTodoMutationVariables>;
export type DeleteTodoComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteTodoMutation, DeleteTodoMutationVariables>, 'mutation'>;

    export const DeleteTodoComponent = (props: DeleteTodoComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteTodoMutation, DeleteTodoMutationVariables> mutation={DeleteTodoDocument} {...props} />
    );
    

/**
 * __useDeleteTodoMutation__
 *
 * To run a mutation, you first call `useDeleteTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoMutation, { data, loading, error }] = useDeleteTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTodoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTodoMutation, DeleteTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTodoMutation, DeleteTodoMutationVariables>(DeleteTodoDocument, options);
      }
export type DeleteTodoMutationHookResult = ReturnType<typeof useDeleteTodoMutation>;
export type DeleteTodoMutationResult = Apollo.MutationResult<DeleteTodoMutation>;
export type DeleteTodoMutationOptions = Apollo.BaseMutationOptions<DeleteTodoMutation, DeleteTodoMutationVariables>;
export const GetAllUsersDocument = gql`
    query GetAllUsers {
  allUsers {
    id
    username
  }
}
    `;
export type GetAllUsersComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetAllUsersQuery, GetAllUsersQueryVariables>, 'query'>;

    export const GetAllUsersComponent = (props: GetAllUsersComponentProps) => (
      <ApolloReactComponents.Query<GetAllUsersQuery, GetAllUsersQueryVariables> query={GetAllUsersDocument} {...props} />
    );
    

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
      }
export function useGetAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;
export const GetOneUserDocument = gql`
    query GetOneUser($id: String!) {
  oneUser(id: $id) {
    id
    username
    todos {
      id
      todoContent
      createdAt
      isComplete
    }
  }
}
    `;
export type GetOneUserComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetOneUserQuery, GetOneUserQueryVariables>, 'query'> & ({ variables: GetOneUserQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetOneUserComponent = (props: GetOneUserComponentProps) => (
      <ApolloReactComponents.Query<GetOneUserQuery, GetOneUserQueryVariables> query={GetOneUserDocument} {...props} />
    );
    

/**
 * __useGetOneUserQuery__
 *
 * To run a query within a React component, call `useGetOneUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOneUserQuery(baseOptions: Apollo.QueryHookOptions<GetOneUserQuery, GetOneUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOneUserQuery, GetOneUserQueryVariables>(GetOneUserDocument, options);
      }
export function useGetOneUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOneUserQuery, GetOneUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOneUserQuery, GetOneUserQueryVariables>(GetOneUserDocument, options);
        }
export type GetOneUserQueryHookResult = ReturnType<typeof useGetOneUserQuery>;
export type GetOneUserLazyQueryHookResult = ReturnType<typeof useGetOneUserLazyQuery>;
export type GetOneUserQueryResult = Apollo.QueryResult<GetOneUserQuery, GetOneUserQueryVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($username: String!, $password: String!) {
  createUser(username: $username, password: $password) {
    token
    user {
      id
      username
    }
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;
export type CreateUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateUserMutation, CreateUserMutationVariables>, 'mutation'>;

    export const CreateUserComponent = (props: CreateUserComponentProps) => (
      <ApolloReactComponents.Mutation<CreateUserMutation, CreateUserMutationVariables> mutation={CreateUserDocument} {...props} />
    );
    

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const LoginDocument = gql`
    mutation Login($username: String!, $password: String!) {
  loginUser(username: $username, password: $password) {
    token
    user {
      id
      username
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;
export type LoginComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LoginMutation, LoginMutationVariables>, 'mutation'>;

    export const LoginComponent = (props: LoginComponentProps) => (
      <ApolloReactComponents.Mutation<LoginMutation, LoginMutationVariables> mutation={LoginDocument} {...props} />
    );
    

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;