import { getBpm, getBpmSets } from "./bpm";

describe("bpm", () => {
  describe("getBpm", () => {
    it("works for blank or empty values", () => {
      expect(getBpm()).toBe(0);
      expect(getBpm([])).toBe(0);
    });

    it("works with beats", () => {
      expect(getBpm([1000, 2000])).toBe(60);
      expect(getBpm([1000, 2000, 3000])).toBe(60);
      expect(getBpm([1000, 3000, 5000])).toBe(30);
      expect(getBpm([1000, 3000, 5000])).toBe(30);
    });
  });

  describe("getBpmSets", () => {
    it("works for blank or empty values", () => {
      expect(getBpm()).toBe(0);
      expect(getBpm([])).toBe(0);
    });

    it("works with one set", () => {
      expect(getBpmSets([1000, 2000, 3000, 4000], 4)).toEqual([60]);
      expect(getBpmSets([1000, 3000], 2)).toEqual([30]);
    });

    it("works with two sets", () => {
      expect(
        getBpmSets([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000], 4)
      ).toEqual([60, 60]);
      expect(getBpmSets([1000, 3000, 5000, 7000], 2)).toEqual([30, 30]);
    });
  });
});
