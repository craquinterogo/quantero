# Fixed Income Securities

## Bond Fundamentals

### Bond Pricing

**Present value of cash flows**:
```
P = Σ (C / (1+y)^t) + (F / (1+y)^n)
```

Where:
- P = Bond price
- C = Coupon payment
- F = Face value
- y = Yield to maturity (YTM)
- n = Number of periods

### Yield Measures

**Current Yield**:
```
Current Yield = Annual Coupon / Price
```

**Yield to Maturity (YTM)**:
Internal rate of return that equates PV of cash flows to price.

**Yield to Call (YTC)**:
YTM assuming bond is called at first call date.

## Duration and Convexity

### Macaulay Duration
Weighted average time to receive cash flows:
```
D_Mac = Σ [t * PV(CF_t)] / P
```

### Modified Duration
Price sensitivity to yield changes:
```
D_Mod = D_Mac / (1 + y)
```

**Price change approximation**:
```
ΔP/P ≈ -D_Mod * Δy
```

### Dollar Duration
```
DD = D_Mod * P
```

**Dollar price change**:
```
ΔP ≈ -DD * Δy
```

### Convexity
Second-order sensitivity:
```
C = (1/P) * Σ [t(t+1) * CF_t / (1+y)^{t+2}]
```

**Better price approximation**:
```
ΔP/P ≈ -D_Mod * Δy + (1/2) * C * (Δy)²
```

### Effective Duration
For bonds with embedded options:
```
D_eff = (P_- - P_+) / (2 * P_0 * Δy)
```

## Yield Curve

Graph of yields vs. maturity for similar credit quality bonds.

### Shapes
1. **Normal**: Upward sloping (longer maturity = higher yield)
2. **Inverted**: Downward sloping (recession indicator)
3. **Flat**: Similar yields across maturities
4. **Humped**: Peak at intermediate maturities

### Term Structure Theories

**Pure Expectations Theory**:
Forward rates are unbiased predictors of future spot rates.

**Liquidity Preference Theory**:
Long-term rates include liquidity premium.

**Market Segmentation Theory**:
Different maturity segments are separate markets.

**Preferred Habitat Theory**:
Investors prefer certain maturities but can be induced to shift.

## Spot Rates and Forward Rates

### Spot Rate (Zero Rate)
Yield on zero-coupon bond.

**Bootstrapping**: Extract spot rates from coupon bond prices.

### Forward Rates
Implied future interest rates:
```
(1 + s_n)^n = (1 + s_m)^m * (1 + f_{m,n})^{n-m}
```

Where f_{m,n} is forward rate from time m to n.

## Interest Rate Models

### Vasicek Model
```
dr_t = a(b - r_t)dt + σdW_t
```
- Mean reverting
- Can produce negative rates

### Cox-Ingersoll-Ross (CIR)
```
dr_t = a(b - r_t)dt + σ√(r_t)dW_t
```
- Mean reverting
- Always non-negative

### Hull-White Model
```
dr_t = [θ(t) - a*r_t]dt + σdW_t
```
- Can fit current term structure exactly

### Black-Derman-Toy (BDT)
Binomial tree model with:
- Log-normal interest rates
- Time-varying volatility

### Heath-Jarrow-Morton (HJM)
Models evolution of entire forward curve:
```
df(t,T) = α(t,T)dt + σ(t,T)dW_t
```

## Credit Risk

### Credit Spread
Additional yield over risk-free rate to compensate for default risk.

### Credit Rating
Assessment by agencies (S&P, Moody's, Fitch):
- Investment grade: AAA to BBB
- High yield (junk): BB and below

### Default Probability

**Structural Models (Merton)**:
Model firm value and default when assets < liabilities.

**Reduced Form Models**:
Model default intensity λ(t):
```
P(default by T) = 1 - e^{-∫λ(s)ds}
```

### Credit Default Swaps (CDS)
Insurance against default:
- Protection buyer pays periodic premium
- Protection seller pays if credit event occurs

**CDS Spread**: Annual premium as % of notional.

## Mortgage-Backed Securities (MBS)

### Prepayment Risk
Borrowers can prepay mortgages (call option).

**Prepayment Models**:
- PSA (Public Securities Association) model
- Constant prepayment rate (CPR)
- Single monthly mortality (SMM)

### Negative Convexity
When rates fall, prepayments increase, limiting price appreciation.

### Option-Adjusted Spread (OAS)
Spread after removing value of embedded options.

## Bond Portfolio Strategies

### Passive Strategies

**Buy-and-Hold**: Hold to maturity.

**Indexing**: Match bond index.

**Immunization**: Match duration of assets and liabilities.

### Active Strategies

**Interest Rate Anticipation**:
- Increase duration if rates expected to fall
- Decrease duration if rates expected to rise

**Yield Curve Strategies**:
- Bullet: Concentrate in single maturity
- Barbell: Combine short and long maturities
- Ladder: Evenly spread across maturities

**Sector Rotation**: Shift between government, corporate, etc.

**Credit Analysis**: Identify mispriced credit risk.

## Interest Rate Risk Management

### Duration Matching
Match portfolio duration to liability duration.

### Immunization Conditions
1. PV(Assets) = PV(Liabilities)
2. Duration(Assets) = Duration(Liabilities)
3. Convexity(Assets) > Convexity(Liabilities)

### Key Rate Duration
Sensitivity to changes at specific points on yield curve.

### Hedging with Futures
Treasury futures to adjust portfolio duration:
```
N_futures = -(D_target - D_portfolio) * Portfolio Value / (D_futures * Future Price * CTD Factor)
```

## Convertible Bonds

Bond with option to convert to equity.

**Value = Straight Bond Value + Conversion Option Value**

**Conversion Ratio**: Shares received per bond.

**Conversion Price**: Bond par / Conversion ratio.

**Conversion Premium**: % above conversion value.
