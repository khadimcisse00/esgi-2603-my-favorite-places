import { getDistance } from "./getDistance";

describe("getDistance", () => {
  it("returns 0 for the same point", () => {
    const point = { lat: 48.8566, lng: 2.3522 };

    expect(getDistance(point, point)).toBe(0);
  });

  it("returns a positive distance between Paris and London", () => {
    const paris = { lat: 48.8566, lng: 2.3522 };
    const london = { lat: 51.5074, lng: -0.1278 };

    expect(getDistance(paris, london)).toBeGreaterThan(300);
  });
});