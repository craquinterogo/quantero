# Option Pricing and Derivatives

## Options Fundamentals

### Call Option
Right (not obligation) to buy an asset at strike price K by expiration T.

**Payoff at expiration**:
```
C_T = max(S_T - K, 0)
```

### Put Option
Right to sell an asset at strike price K by expiration T.

**Payoff at expiration**:
```
P_T = max(K - S_T, 0)
```

### Put-Call Parity
For European options:
```
C - P = S - K*e^(-rT)
```

## Black-Scholes-Merton Model

### Assumptions
1. Constant risk-free rate and volatility
2. No dividends
3. European exercise only
4. No transaction costs or taxes
5. Continuous trading
6. Log-normal asset prices

### Black-Scholes PDE
```
∂V/∂t + (1/2)σ²S²∂²V/∂S² + rS∂V/∂S - rV = 0
```

### Closed-Form Solutions

**European Call**:
```
C = S*N(d₁) - K*e^(-rT)*N(d₂)
```

**European Put**:
```
P = K*e^(-rT)*N(-d₂) - S*N(-d₁)
```

Where:
```
d₁ = [ln(S/K) + (r + σ²/2)T] / (σ√T)
d₂ = d₁ - σ√T
```

N(·) is the cumulative standard normal distribution.

## The Greeks

Sensitivity measures for options pricing:

### Delta (Δ)
Rate of change of option value with respect to underlying price:
```
Δ = ∂V/∂S
```
- Call delta: N(d₁), range [0, 1]
- Put delta: N(d₁) - 1, range [-1, 0]

### Gamma (Γ)
Rate of change of delta:
```
Γ = ∂²V/∂S² = ∂Δ/∂S
```
```
Γ = n(d₁) / (S*σ√T)
```
where n(·) is the standard normal density.

### Vega (ν)
Sensitivity to volatility changes:
```
ν = ∂V/∂σ = S*n(d₁)*√T
```

### Theta (Θ)
Time decay of option value:
```
Θ = ∂V/∂t
```
For a call:
```
Θ = -S*n(d₁)*σ/(2√T) - rK*e^(-rT)*N(d₂)
```

### Rho (ρ)
Sensitivity to interest rate:
```
ρ = ∂V/∂r
```
For a call: ρ = K*T*e^(-rT)*N(d₂)

## Binomial Option Pricing

Discrete-time model that converges to Black-Scholes.

### Single-Period Binomial Model
Asset can move up by factor u or down by factor d:
```
u = e^(σ√Δt)
d = e^(-σ√Δt)
```

Risk-neutral probability:
```
p = (e^(rΔt) - d) / (u - d)
```

Option value:
```
V = e^(-rΔt) * [p*V_u + (1-p)*V_d]
```

### Multi-Period Extension
Work backwards from expiration through the tree.

## Monte Carlo Simulation

For path-dependent options or when no closed-form solution exists.

### Algorithm
1. Generate random price paths under risk-neutral measure
2. Calculate payoff for each path
3. Average payoffs and discount to present value

**Estimator**:
```
V ≈ e^(-rT) * (1/N) * Σ Payoff_i
```

### Variance Reduction Techniques
- Antithetic variates
- Control variates
- Importance sampling
- Stratified sampling

## Implied Volatility

The volatility that makes the Black-Scholes price equal to the market price.

**Cannot be solved analytically** - use numerical methods:
- Newton-Raphson
- Bisection
- Brent's method

### Volatility Smile/Skew
Implied volatility varies by strike price:
- **Smile**: Higher IV at extreme strikes (equity indices)
- **Skew**: Decreasing IV with strike (individual equities)

Violations of Black-Scholes assumptions (constant volatility, log-normal prices).

## American Options

Can be exercised at any time before expiration.

**No closed-form solution** - use numerical methods:
- Binomial/trinomial trees
- Finite difference methods
- Least-squares Monte Carlo (Longstaff-Schwartz)

**Early exercise**: American calls on non-dividend-paying stocks should never be exercised early, thus having the same value as European calls. However, American calls on dividend-paying stocks and American puts may have early exercise value.

## Exotic Options

### Asian Options
Payoff depends on average price:
```
Payoff = max(Savg - K, 0)  [Asian call]
```

### Barrier Options
Activated or deactivated when price hits barrier:
- Knock-in/knock-out
- Up-and-in/down-and-in

### Lookback Options
Payoff based on maximum or minimum price over option life:
```
Payoff = Smax - K  [fixed strike lookback call]
```

### Digital/Binary Options
Fixed payoff if condition met:
```
Payoff = Q if S_T > K, else 0
```

## Interest Rate Derivatives

### Caps and Floors
Collections of caplets/floorlets on interest rates.

### Swaptions
Option to enter into an interest rate swap.

### Bond Options
Options on bond prices or yields.

## Hedging Strategies

### Delta Hedging
Maintain delta-neutral position by adjusting underlying holdings.

### Delta-Gamma Hedging
Use options to hedge both delta and gamma.

### Static vs. Dynamic Hedging
- Static: Set and forget
- Dynamic: Continuous rebalancing
