interface PostData {
  zonecode: number;
  address: string;
  buildingName: string;
}

export interface PostcodeParams {
  oncomplete: (data: PostData) => boid;
  onclose: () => void;
  width: number | string;
  height: number | string;
}

declare global {
  namespace daum {
    class Postcode {
      constructor(params: PostcodeParams);
      embed(e: HTMLElement);
    }
  }
}
