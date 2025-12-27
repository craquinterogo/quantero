# Portfolio Theory and Optimization

## Modern Portfolio Theory (MPT)

Harry Markowitz's Modern Portfolio Theory (1952) revolutionized investment management by formalizing the concept of diversification.

### Key Concepts

**Expected Return**: The weighted average of possible returns
```
E[R_p] = Σ w_i * E[R_i]
```
where w_i is the weight of asset i and E[R_i] is its expected return.

**Portfolio Variance**: A measure of portfolio risk
```
σ²_p = Σ Σ w_i * w_j * σ_ij
```
where σ_ij is the covariance between assets i and j.

### The Efficient Frontier

The efficient frontier represents the set of optimal portfolios that offer:
- Maximum expected return for a given level of risk, or
- Minimum risk for a given level of expected return

### Markowitz Optimization Problem

**Minimize**: Portfolio variance σ²_p

**Subject to**:
- Target expected return: E[R_p] = μ*
- Weights sum to 1: Σ w_i = 1
- Optional: No short selling: w_i ≥ 0

## Capital Asset Pricing Model (CAPM)

CAPM describes the relationship between systematic risk and expected return.

**Formula**:
```
E[R_i] = R_f + β_i * (E[R_m] - R_f)
```

Where:
- E[R_i] = Expected return of asset i
- R_f = Risk-free rate
- β_i = Beta of asset i (systematic risk)
- E[R_m] = Expected market return

### Beta Calculation
```
β_i = Cov(R_i, R_m) / Var(R_m)
```

## Sharpe Ratio

The Sharpe ratio measures risk-adjusted return:
```
Sharpe Ratio = (E[R_p] - R_f) / σ_p
```

Higher Sharpe ratios indicate better risk-adjusted performance.

## Asset Allocation Strategies

### 1. Strategic Asset Allocation
- Long-term targets based on investor objectives
- Periodic rebalancing to maintain target weights
- Based on expected returns and risk tolerance

### 2. Tactical Asset Allocation
- Short-term deviations from strategic allocation
- Exploits market inefficiencies or opportunities
- More active management approach

### 3. Risk Parity
- Allocates risk equally across assets
- Not based on capital weights but risk contribution
- Often uses leverage for low-risk assets

## Multi-Factor Models

Extensions beyond CAPM considering multiple risk factors:

### Fama-French Three-Factor Model
```
E[R_i] - R_f = β_m*(E[R_m] - R_f) + β_s*SMB + β_v*HML
```

Where:
- SMB = Small Minus Big (size factor)
- HML = High Minus Low (value factor)

### Carhart Four-Factor Model
Adds momentum factor:
```
E[R_i] - R_f = β_m*(E[R_m] - R_f) + β_s*SMB + β_v*HML + β_m*MOM
```

## Practical Considerations

1. **Estimation Error**: Historical data may not predict future returns
2. **Transaction Costs**: Frequent rebalancing incurs costs
3. **Constraints**: Real-world constraints (regulatory, liquidity, etc.)
4. **Non-Normal Returns**: Many assets exhibit fat tails and skewness
5. **Time-Varying Parameters**: Correlations and volatilities change over time
