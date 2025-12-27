# Risk Management

## Value at Risk (VaR)

Value at Risk measures the maximum potential loss over a specific time horizon at a given confidence level.

**Definition**: VaR at confidence level α is the α-quantile of the loss distribution:
```
P(Loss > VaR_α) = 1 - α
```

For example, a 1-day 95% VaR of $1M means there is a 5% chance of losing more than $1M in one day.

### VaR Calculation Methods

#### 1. Historical Simulation
- Uses historical returns to estimate the loss distribution
- Non-parametric approach
- Easy to implement but assumes past represents future

#### 2. Variance-Covariance (Parametric)
Assumes returns are normally distributed:
```
VaR_α = μ_p + σ_p * z_α
```
where z_α is the α-quantile of the standard normal distribution.

#### 3. Monte Carlo Simulation
- Generates random scenarios based on assumed distributions
- Can handle complex portfolios and non-linear instruments
- Computationally intensive

## Expected Shortfall (ES)

Also known as Conditional Value at Risk (CVaR), ES measures the expected loss given that the loss exceeds VaR.

**Formula**:
```
ES_α = E[Loss | Loss > VaR_α]
```

### Advantages over VaR
- Coherent risk measure (satisfies subadditivity)
- Accounts for tail risk beyond VaR threshold
- Better for portfolio optimization

## Risk Metrics

### 1. Volatility (Standard Deviation)
```
σ = √(E[(R - μ)²])
```

### 2. Beta
Systematic risk relative to market:
```
β = Cov(R_i, R_m) / Var(R_m)
```

### 3. Tracking Error
Standard deviation of active returns:
```
TE = √(Var(R_p - R_b))
```
where R_b is the benchmark return.

### 4. Maximum Drawdown
```
MDD = max_t (max_τ≤t P_τ - P_t) / max_τ≤t P_τ
```

### 5. Sortino Ratio
Similar to Sharpe ratio but only penalizes downside volatility:
```
Sortino = (E[R_p] - R_f) / σ_downside
```

## Stress Testing

Evaluating portfolio performance under extreme scenarios.

### Types of Stress Tests

1. **Historical Scenarios**: Based on past crises (2008 financial crisis, COVID-19, etc.)
2. **Hypothetical Scenarios**: Plausible but not historically observed events
3. **Sensitivity Analysis**: Impact of changes in individual risk factors

## Risk Decomposition

### Marginal VaR
The change in portfolio VaR from a small change in position:
```
MVaR_i = ∂VaR_p / ∂w_i
```

### Component VaR
Contribution of each position to total portfolio VaR:
```
CVaR_i = w_i * MVaR_i
```

Useful property: Σ CVaR_i = VaR_p

## Credit Risk

### Probability of Default (PD)
The likelihood that a borrower will default within a given time period.

### Loss Given Default (LGD)
The percentage of exposure lost when default occurs:
```
LGD = 1 - Recovery Rate
```

### Expected Loss (EL)
```
EL = PD * LGD * EAD
```
where EAD is Exposure at Default.

### Credit VaR
Unexpected loss due to credit events, typically calculated as:
```
Credit VaR = UL = √(EL² + Variance of loss)
```

## Market Risk

Risk from changes in market prices:
- **Equity Risk**: Changes in stock prices
- **Interest Rate Risk**: Changes in yield curves
- **FX Risk**: Foreign exchange rate movements
- **Commodity Risk**: Changes in commodity prices

## Operational Risk

Risk from failed processes, systems, or external events:
- Usually measured using Loss Distribution Approach (LDA)
- Advanced Measurement Approach (AMA) under Basel regulations

## Best Practices

1. **Diversification**: Don't put all eggs in one basket
2. **Regular Monitoring**: Track risk metrics continuously
3. **Backtesting**: Validate risk models against actual outcomes
4. **Scenario Analysis**: Complement VaR with stress tests
5. **Risk Limits**: Set and enforce appropriate limits
6. **Independent Risk Function**: Separation from trading/investment teams
