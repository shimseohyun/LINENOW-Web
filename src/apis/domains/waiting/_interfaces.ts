import { postResponse } from "@apis/instance";
import { Waiting } from "@interfaces/waiting";
import { WaitingStatus } from "@linenow-types/status";

export interface GetWaitingResponse {
  id: number;
  // username:string;
  booth: Booth;
  party_size: number;
  waiting_status: WaitingStatus;
  // registered_at: string;
  // ready_to_confirm_at?: string;
  // confirmed_at?: string;
  // canceled_at?: string;
  waiting_teams_ahead: number;
  confirm_due_time: string;
  arrival_due_time: string;
}

interface Booth {
  booth_id: number;
  name: string;
  description: string;
  location: string;
  thumbnail: string;
}

export interface GetWaitingsResponse extends Array<GetWaitingResponse> {}

export const transformGetWaitingResponse = (
  response: GetWaitingResponse
): Waiting => {
  return {
    waitingID: response.id,
    waitingStatus: response.waiting_status,
    waitingTeamsAhead: response.waiting_teams_ahead,

    party_size: response.party_size,

    confirmDueTime: response.confirm_due_time,
    arrivalarrivalDueTime: response.arrival_due_time,

    booth: {
      boothID: response.booth.booth_id,
      name: response.booth.name,
      description: response.booth.description,
      location: response.booth.location,
      thumbnail: response.booth.thumbnail,
    },

    // registeredAt: response.registered_at,
    // readyToConfirmAt: response.ready_to_confirm_at,
    // confirmedAt: response.confirmed_at,
    // canceledAt: response.canceled_at,
  };
};

export const transformGetWaitingsResponse = (
  response: GetWaitingsResponse
): Waiting[] => {
  return response.map(transformGetWaitingResponse);
};

// 대기 줄서기 등록 요청 인터페이스
export interface RegisterWaitingRequest {
  boothId: number;
  party_size: number;
}

// 대기 줄서기 등록 함수
export const postWaitingRegister = async ({
  boothId,
  party_size,
}: RegisterWaitingRequest): Promise<Waiting | null> => {
  const response = await postResponse<Waiting>(
    `api/v1/waitings/${boothId}/register`,
    { party_size }
  );

  if (response) {
    return response;
  }
  return null;
};
