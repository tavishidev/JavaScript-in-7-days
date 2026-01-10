# notes of function topic of JavaScript
 **logic of gcd of two numbers**
- To find the GCD of two numbers, we repeatedly replace the pair.
- (a, b) with (b, a % b) because any number that divides both.
- a and b also divides their remainder.
- This process continues until the remainder becomes zero.
- At that point, the non-zero number is the GCD.

> don't need to check a>b condition as % automatically handles it

**logic for LCD of two numbers**
- LCM(a, b) × GCD(a, b) = a × b

**universal convertor ka logic**
- saare temp ko pehle ek same temperature me le aao phir usse sb me conversion kro


*NOTE*
1. ❌ Validation ≠ checking against stored values

2. ✅ Validation = checking rules

3. Return true / false from validation functions



