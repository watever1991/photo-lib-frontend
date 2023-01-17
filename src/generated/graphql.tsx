import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  GenericScalar: any;
  Upload: any;
};

export type CreateUser = {
  __typename?: "CreateUser";
  errors?: Maybe<Scalars["String"]>;
  success?: Maybe<Scalars["Boolean"]>;
  user?: Maybe<UserType>;
};

export type FileUploadType = {
  __typename?: "FileUploadType";
  fileName: Scalars["String"];
  id: Scalars["ID"];
  imageField: Scalars["String"];
  imageUrl?: Maybe<Scalars["String"]>;
  relation?: Maybe<PostType>;
};

export type ForgotPasswordMutation = {
  __typename?: "ForgotPasswordMutation";
  errors?: Maybe<Scalars["String"]>;
  success?: Maybe<Scalars["Boolean"]>;
  user?: Maybe<UserType>;
};

export type GetUser = {
  __typename?: "GetUser";
  errors?: Maybe<Scalars["String"]>;
  success?: Maybe<Scalars["Boolean"]>;
  user?: Maybe<UserType>;
};

export type Mutation = {
  __typename?: "Mutation";
  changePasswordIfForgotten?: Maybe<ForgotPasswordMutation>;
  createPost?: Maybe<PostMutation>;
  createUser?: Maybe<CreateUser>;
  getPost?: Maybe<PostDataMutation>;
  getUser?: Maybe<GetUser>;
  postFileUpload?: Maybe<PostFileUploadMutation>;
  refreshToken?: Maybe<Refresh>;
  /** Obtain JSON Web Token mutation */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  verifyToken?: Maybe<Verify>;
};

export type MutationChangePasswordIfForgottenArgs = {
  email: Scalars["String"];
  username: Scalars["String"];
};

export type MutationCreatePostArgs = {
  banner?: InputMaybe<Scalars["Upload"]>;
  creator: Scalars["String"];
  price: Scalars["Float"];
  title: Scalars["String"];
};

export type MutationCreateUserArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
  username: Scalars["String"];
};

export type MutationGetPostArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type MutationGetUserArgs = {
  email: Scalars["String"];
  username: Scalars["String"];
};

export type MutationPostFileUploadArgs = {
  fileName?: InputMaybe<Scalars["String"]>;
  id: Scalars["ID"];
  imageField?: InputMaybe<Scalars["Upload"]>;
};

export type MutationRefreshTokenArgs = {
  refreshToken?: InputMaybe<Scalars["String"]>;
};

export type MutationTokenAuthArgs = {
  password: Scalars["String"];
  username: Scalars["String"];
};

export type MutationVerifyTokenArgs = {
  token?: InputMaybe<Scalars["String"]>;
};

/** Obtain JSON Web Token mutation */
export type ObtainJsonWebToken = {
  __typename?: "ObtainJSONWebToken";
  payload: Scalars["GenericScalar"];
  refreshExpiresIn: Scalars["Int"];
  refreshToken: Scalars["String"];
  token: Scalars["String"];
};

export type PostDataMutation = {
  __typename?: "PostDataMutation";
  errors?: Maybe<Scalars["String"]>;
  post?: Maybe<PostType>;
  postFiles?: Maybe<Array<Maybe<FileUploadType>>>;
  success?: Maybe<Scalars["Boolean"]>;
};

export type PostFileUploadMutation = {
  __typename?: "PostFileUploadMutation";
  errors?: Maybe<Scalars["String"]>;
  post?: Maybe<PostType>;
  postFiles?: Maybe<Array<Maybe<FileUploadType>>>;
  success?: Maybe<Scalars["Boolean"]>;
};

export type PostMutation = {
  __typename?: "PostMutation";
  errors?: Maybe<Scalars["String"]>;
  post?: Maybe<PostType>;
  success?: Maybe<Scalars["Boolean"]>;
};

export type PostType = {
  __typename?: "PostType";
  banner?: Maybe<Scalars["String"]>;
  bannerUrl?: Maybe<Scalars["String"]>;
  creator?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  postFiles: Array<FileUploadType>;
  price?: Maybe<Scalars["Float"]>;
  title?: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  me?: Maybe<UserType>;
  users?: Maybe<Array<Maybe<UserType>>>;
};

export type Refresh = {
  __typename?: "Refresh";
  payload: Scalars["GenericScalar"];
  refreshExpiresIn: Scalars["Int"];
  refreshToken: Scalars["String"];
  token: Scalars["String"];
};

export type UserType = {
  __typename?: "UserType";
  dateJoined: Scalars["DateTime"];
  email: Scalars["String"];
  firstName: Scalars["String"];
  id: Scalars["ID"];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars["Boolean"];
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars["Boolean"];
  /** Designates that this user has all permissions without explicitly assigning them. */
  isSuperuser: Scalars["Boolean"];
  lastLogin?: Maybe<Scalars["DateTime"]>;
  lastName: Scalars["String"];
  password: Scalars["String"];
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars["String"];
};

export type Verify = {
  __typename?: "Verify";
  payload: Scalars["GenericScalar"];
};

export type CreateUserMutationVariables = Exact<{
  email: Scalars["String"];
  password: Scalars["String"];
  username: Scalars["String"];
}>;

export type CreateUserMutation = {
  __typename?: "Mutation";
  createUser?: {
    __typename?: "CreateUser";
    user?: {
      __typename?: "UserType";
      id: string;
      username: string;
      email: string;
    } | null;
  } | null;
};

export type LoginUserMutationVariables = Exact<{
  username: Scalars["String"];
  password: Scalars["String"];
}>;

export type LoginUserMutation = {
  __typename?: "Mutation";
  tokenAuth?: {
    __typename?: "ObtainJSONWebToken";
    token: string;
    payload: any;
  } | null;
};

export type VerifyTokenMutationVariables = Exact<{
  token: Scalars["String"];
}>;

export type VerifyTokenMutation = {
  __typename?: "Mutation";
  verifyToken?: { __typename?: "Verify"; payload: any } | null;
};

export type ForgetPasswordMutationVariables = Exact<{
  username: Scalars["String"];
  email: Scalars["String"];
}>;

export type ForgetPasswordMutation = {
  __typename?: "Mutation";
  changePasswordIfForgotten?: {
    __typename?: "ForgotPasswordMutation";
    user?: { __typename?: "UserType"; email: string } | null;
  } | null;
};

export type GetProfileQueryVariables = Exact<{ [key: string]: never }>;

export type GetProfileQuery = {
  __typename?: "Query";
  me?: {
    __typename?: "UserType";
    id: string;
    username: string;
    email: string;
  } | null;
};

export const CreateUserDocument = gql`
  mutation createUser($email: String!, $password: String!, $username: String!) {
    createUser(email: $email, password: $password, username: $username) {
      user {
        id
        username
        email
      }
    }
  }
`;
export type CreateUserMutationFn = Apollo.MutationFunction<
  CreateUserMutation,
  CreateUserMutationVariables
>;

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
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useCreateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateUserMutation,
    CreateUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(
    CreateUserDocument,
    options
  );
}
export type CreateUserMutationHookResult = ReturnType<
  typeof useCreateUserMutation
>;
export type CreateUserMutationResult =
  Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<
  CreateUserMutation,
  CreateUserMutationVariables
>;
export const LoginUserDocument = gql`
  mutation loginUser($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
      payload
    }
  }
`;
export type LoginUserMutationFn = Apollo.MutationFunction<
  LoginUserMutation,
  LoginUserMutationVariables
>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginUserMutation,
    LoginUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(
    LoginUserDocument,
    options
  );
}
export type LoginUserMutationHookResult = ReturnType<
  typeof useLoginUserMutation
>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<
  LoginUserMutation,
  LoginUserMutationVariables
>;
export const VerifyTokenDocument = gql`
  mutation verifyToken($token: String!) {
    verifyToken(token: $token) {
      payload
    }
  }
`;
export type VerifyTokenMutationFn = Apollo.MutationFunction<
  VerifyTokenMutation,
  VerifyTokenMutationVariables
>;

/**
 * __useVerifyTokenMutation__
 *
 * To run a mutation, you first call `useVerifyTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyTokenMutation, { data, loading, error }] = useVerifyTokenMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useVerifyTokenMutation(
  baseOptions?: Apollo.MutationHookOptions<
    VerifyTokenMutation,
    VerifyTokenMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<VerifyTokenMutation, VerifyTokenMutationVariables>(
    VerifyTokenDocument,
    options
  );
}
export type VerifyTokenMutationHookResult = ReturnType<
  typeof useVerifyTokenMutation
>;
export type VerifyTokenMutationResult =
  Apollo.MutationResult<VerifyTokenMutation>;
export type VerifyTokenMutationOptions = Apollo.BaseMutationOptions<
  VerifyTokenMutation,
  VerifyTokenMutationVariables
>;
export const ForgetPasswordDocument = gql`
  mutation forgetPassword($username: String!, $email: String!) {
    changePasswordIfForgotten(username: $username, email: $email) {
      user {
        email
      }
    }
  }
`;
export type ForgetPasswordMutationFn = Apollo.MutationFunction<
  ForgetPasswordMutation,
  ForgetPasswordMutationVariables
>;

/**
 * __useForgetPasswordMutation__
 *
 * To run a mutation, you first call `useForgetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgetPasswordMutation, { data, loading, error }] = useForgetPasswordMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgetPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ForgetPasswordMutation,
    ForgetPasswordMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ForgetPasswordMutation,
    ForgetPasswordMutationVariables
  >(ForgetPasswordDocument, options);
}
export type ForgetPasswordMutationHookResult = ReturnType<
  typeof useForgetPasswordMutation
>;
export type ForgetPasswordMutationResult =
  Apollo.MutationResult<ForgetPasswordMutation>;
export type ForgetPasswordMutationOptions = Apollo.BaseMutationOptions<
  ForgetPasswordMutation,
  ForgetPasswordMutationVariables
>;
export const GetProfileDocument = gql`
  query getProfile {
    me {
      id
      username
      email
    }
  }
`;

/**
 * __useGetProfileQuery__
 *
 * To run a query within a React component, call `useGetProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProfileQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetProfileQuery,
    GetProfileQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetProfileQuery, GetProfileQueryVariables>(
    GetProfileDocument,
    options
  );
}
export function useGetProfileLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProfileQuery,
    GetProfileQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetProfileQuery, GetProfileQueryVariables>(
    GetProfileDocument,
    options
  );
}
export type GetProfileQueryHookResult = ReturnType<typeof useGetProfileQuery>;
export type GetProfileLazyQueryHookResult = ReturnType<
  typeof useGetProfileLazyQuery
>;
export type GetProfileQueryResult = Apollo.QueryResult<
  GetProfileQuery,
  GetProfileQueryVariables
>;
