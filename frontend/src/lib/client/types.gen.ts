// This file is auto-generated by @hey-api/openapi-ts

export type CheckAuthResponse = {
    email: string;
};

export type ComplexEvent = {
    name: string;
    description?: (string | null);
    join_code: string;
    id: string;
    attendees?: Array<(string)>;
};

export type Event = {
    name: string;
    description?: (string | null);
    id: string;
};

export type EventCreationPayload = {
    name: string;
    description?: (string | null);
};

export type HTTPValidationError = {
    detail?: Array<ValidationError>;
};

export type MagicLinkVerificationResponse = {
    access_token: string;
    token_type: string;
    email: string;
};

export type Project = {
    name: string;
    readme: string;
    repo: string;
    image_url: string;
    description?: (string | null);
    event: [
        string
    ];
    id: string;
    points?: number;
};

export type ProjectBase = {
    name: string;
    readme: string;
    repo: string;
    image_url: string;
    description?: (string | null);
};

export type ProjectUpdate = {
    name: string;
    readme: string;
    repo: string;
    image_url: string;
    description?: (string | null);
};

/**
 * A ``dict`` representing a record returned from the Airtable API.
 * See `List records <https://airtable.com/developers/web/api/list-records>`__.
 *
 * Usage:
 * >>> table.first(formula="Name = 'Alice'")
 * {
 * 'id': 'recAdw9EjV90xbW',
 * 'createdTime': '2023-05-22T21:24:15.333134Z',
 * 'fields': {'Name': 'Alice', 'Department': 'Engineering'}
 * }
 */
export type RecordDict = {
    id: string;
    createdTime: string;
    fields: {
        [key: string]: unknown;
    };
};

export type User = {
    email: string;
};

/**
 * Return information regarding what the events the user owns and what events they are attending. If they are only attending an event, don't return sensitive information like participants.
 */
export type UserEvents = {
    owned_events: Array<ComplexEvent>;
    attending_events: Array<Event>;
};

export type UserExistsResponse = {
    exists: boolean;
};

export type UserSignupPayload = {
    first_name: string;
    last_name: string;
    email: string;
    street_1: string;
    street_2?: (string | null);
    city: string;
    state: string;
    zip_code: string;
    country: string;
};

export type ValidationError = {
    loc: Array<(string | number)>;
    msg: string;
    type: string;
};

export type Vote = {
    /**
     * The ID of the event to vote in.
     */
    event_id: string;
    /**
     * In no particular order, the top 3 (or 2 if there are less than 20 projects) projects that the user is voting for.
     */
    projects: Array<(string)>;
};

export type RequestLoginRequestLoginPostData = {
    body: User;
};

export type RequestLoginRequestLoginPostResponse = (unknown);

export type RequestLoginRequestLoginPostError = (HTTPValidationError);

export type VerifyTokenVerifyGetData = {
    query: {
        token: string;
    };
};

export type VerifyTokenVerifyGetResponse = (MagicLinkVerificationResponse);

export type VerifyTokenVerifyGetError = (HTTPValidationError);

export type ProtectedRouteProtectedRouteGetResponse = (CheckAuthResponse);

export type ProtectedRouteProtectedRouteGetError = unknown;

export type GetEventEventsEventIdGetData = {
    path: {
        event_id: string;
    };
};

export type GetEventEventsEventIdGetResponse = ((ComplexEvent | Event));

export type GetEventEventsEventIdGetError = (HTTPValidationError);

export type GetAttendingEventsEventsGetResponse = (UserEvents);

export type GetAttendingEventsEventsGetError = unknown;

export type CreateEventEventsPostData = {
    body: EventCreationPayload;
};

export type CreateEventEventsPostResponse = (unknown);

export type CreateEventEventsPostError = (HTTPValidationError);

export type AttendEventEventsAttendPostData = {
    query: {
        /**
         * A unique code used to join an event
         */
        join_code: string;
    };
};

export type AttendEventEventsAttendPostResponse = (unknown);

export type AttendEventEventsAttendPostError = (HTTPValidationError);

export type VoteEventsVotePostData = {
    body: Vote;
};

export type VoteEventsVotePostResponse = (unknown);

export type VoteEventsVotePostError = (HTTPValidationError);

export type GetLeaderboardEventsEventIdLeaderboardGetData = {
    path: {
        event_id: string;
    };
};

export type GetLeaderboardEventsEventIdLeaderboardGetResponse = (Array<Project>);

export type GetLeaderboardEventsEventIdLeaderboardGetError = (HTTPValidationError);

export type GetEventProjectsEventsEventIdProjectsGetData = {
    path: {
        event_id: string;
    };
};

export type GetEventProjectsEventsEventIdProjectsGetResponse = (Array<Project>);

export type GetEventProjectsEventsEventIdProjectsGetError = (HTTPValidationError);

export type GetProjectsProjectsMineGetResponse = (unknown);

export type GetProjectsProjectsMineGetError = unknown;

export type CreateProjectProjectsPostData = {
    body: ProjectUpdate;
};

export type CreateProjectProjectsPostResponse = (unknown);

export type CreateProjectProjectsPostError = (HTTPValidationError);

export type UpdateProjectProjectsProjectIdPutData = {
    body: ProjectBase;
    path: {
        project_id: string;
    };
};

export type UpdateProjectProjectsProjectIdPutResponse = (unknown);

export type UpdateProjectProjectsProjectIdPutError = (HTTPValidationError);

export type GetProjectProjectsProjectIdGetData = {
    path: {
        project_id: string;
    };
};

export type GetProjectProjectsProjectIdGetResponse = (unknown);

export type GetProjectProjectsProjectIdGetError = (HTTPValidationError);

export type CreateUserUsersPostData = {
    body: UserSignupPayload;
};

export type CreateUserUsersPostResponse = (unknown);

export type CreateUserUsersPostError = (HTTPValidationError);

export type UserExistsUsersExistsGetData = {
    query: {
        email: string;
    };
};

export type UserExistsUsersExistsGetResponse = (UserExistsResponse);

export type UserExistsUsersExistsGetError = (HTTPValidationError);