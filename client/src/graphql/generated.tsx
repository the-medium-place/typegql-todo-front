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

export type Mutation = {
  __typename?: 'Mutation';
  addTodo: Todo;
  deleteTodo: Scalars['Boolean'];
  updateComplete: Todo;
};


export type MutationAddTodoArgs = {
  input: Scalars['String'];
};


export type MutationDeleteTodoArgs = {
  id: Scalars['String'];
};


export type MutationUpdateCompleteArgs = {
  id: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  allTodos: Array<Todo>;
  countTodos: Scalars['Int'];
  oneTodo: Todo;
};


export type QueryOneTodoArgs = {
  id: Scalars['String'];
};

export type Todo = {
  __typename?: 'Todo';
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  isComplete: Scalars['Boolean'];
  todoContent: Scalars['String'];
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
}>;


export type AddTodoMutation = { __typename?: 'Mutation', addTodo: { __typename?: 'Todo', id: string, todoContent: string, createdAt: string, isComplete: boolean } };

export type UpdateTodoMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type UpdateTodoMutation = { __typename?: 'Mutation', deleteTodo: boolean, updateComplete: { __typename?: 'Todo', id: string, todoContent: string, createdAt: string, isComplete: boolean } };

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
    mutation AddTodo($input: String!) {
  addTodo(input: $input) {
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
export const UpdateTodoDocument = gql`
    mutation UpdateTodo($id: String!) {
  deleteTodo(id: $id)
  updateComplete(id: $id) {
    ...TodoInfo
  }
}
    ${TodoInfoFragmentDoc}`;
export type UpdateTodoMutationFn = Apollo.MutationFunction<UpdateTodoMutation, UpdateTodoMutationVariables>;
export type UpdateTodoComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateTodoMutation, UpdateTodoMutationVariables>, 'mutation'>;

    export const UpdateTodoComponent = (props: UpdateTodoComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateTodoMutation, UpdateTodoMutationVariables> mutation={UpdateTodoDocument} {...props} />
    );
    

/**
 * __useUpdateTodoMutation__
 *
 * To run a mutation, you first call `useUpdateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTodoMutation, { data, loading, error }] = useUpdateTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateTodoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTodoMutation, UpdateTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTodoMutation, UpdateTodoMutationVariables>(UpdateTodoDocument, options);
      }
export type UpdateTodoMutationHookResult = ReturnType<typeof useUpdateTodoMutation>;
export type UpdateTodoMutationResult = Apollo.MutationResult<UpdateTodoMutation>;
export type UpdateTodoMutationOptions = Apollo.BaseMutationOptions<UpdateTodoMutation, UpdateTodoMutationVariables>;