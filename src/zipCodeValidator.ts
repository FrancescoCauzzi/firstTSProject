import { StringValidator } from "./validation";
export const numberRegexp = /^[0-9]+$/;
// export class ZipCodeValidator implements StringValidator {
//   isAcceptable(s: string) {
//     return s.length === 5 && numberRegexp.test(s);
//   }
// }

// Export Validation
class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s);
  }
}
export { ZipCodeValidator };
export { ZipCodeValidator as mainValidator };
