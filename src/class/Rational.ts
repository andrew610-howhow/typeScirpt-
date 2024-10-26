/**
 * 請參考 human.ts 的語法完成 Rational 類
 */
export class Rational {
    private numerator: number;
    private denominator: number;

    constructor(numerator: number, denominator: number) {
        this.numerator = numerator;
        this.denominator = denominator === 0 ? 1 : denominator; 
    }

    normalize(): Rational {
        const gcd = this.gcd(this.numerator, this.denominator);
        return new Rational(this.numerator / gcd, this.denominator / gcd);
    }

    isWhole(): boolean {
        return this.numerator % this.denominator === 0;
    }

    isDecimal(): boolean {
        return !this.isWhole();
    }

    public equals(r: Rational): boolean {
        const normalizedThis = this.normalize();
        const normalizedR = r.normalize();
        return normalizedThis.numerator === normalizedR.numerator &&
               normalizedThis.denominator === normalizedR.denominator;
    }

    public _equals(numerator: number, denominator: number): boolean {
        return this.equals(new Rational(numerator, denominator));
    }

    toString(): string {
        return `${this.numerator}/${this.denominator}`;
    }

    static parseRational(str: string): Rational {
        const parts = str.split('/');
        const numerator = parseInt(parts[0]);
        const denominator = parseInt(parts[1]);
        return new Rational(numerator, denominator);
    }

    static _parseRational(numArray: string[], denArray: string[]): Rational {
        const numerator = parseInt(numArray.join(''));
        const denominator = parseInt(denArray.join(''));
        return new Rational(numerator, denominator);
    }

    private gcd(a: number, b: number): number {
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

}