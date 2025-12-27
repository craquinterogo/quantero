# Time Series Analysis

## Stochastic Processes

### Random Walk
```
S_t = S_{t-1} + ε_t
```
where ε_t ~ N(0, σ²)

### Geometric Brownian Motion (GBM)
Continuous-time model for asset prices:
```
dS_t = μS_t dt + σS_t dW_t
```

Solution:
```
S_t = S_0 * exp[(μ - σ²/2)t + σW_t]
```

### Mean Reversion (Ornstein-Uhlenbeck)
```
dX_t = θ(μ - X_t)dt + σdW_t
```
- θ: speed of mean reversion
- μ: long-term mean
- Useful for interest rates, volatility

## Autoregressive Models

### AR(p) - Autoregressive Model
```
Y_t = c + Σ φ_i * Y_{t-i} + ε_t
```

**Stationarity condition**: Roots of characteristic equation outside unit circle.

### MA(q) - Moving Average Model
```
Y_t = μ + ε_t + Σ θ_i * ε_{t-i}
```

### ARMA(p,q)
Combines AR and MA:
```
Y_t = c + Σ φ_i * Y_{t-i} + Σ θ_i * ε_{t-i} + ε_t
```

### ARIMA(p,d,q)
ARMA on differenced data (for non-stationary series):
```
(1 - L)^d Y_t = ARMA(p,q)
```
where L is the lag operator.

## Volatility Modeling

### ARCH(q) - Autoregressive Conditional Heteroskedasticity
```
σ²_t = ω + Σ α_i * ε²_{t-i}
```

### GARCH(p,q) - Generalized ARCH
```
σ²_t = ω + Σ α_i * ε²_{t-i} + Σ β_j * σ²_{t-j}
```

**GARCH(1,1)** most commonly used:
```
σ²_t = ω + α*ε²_{t-1} + β*σ²_{t-1}
```

### EGARCH - Exponential GARCH
Captures asymmetric volatility (leverage effect):
```
ln(σ²_t) = ω + α*g(z_{t-1}) + β*ln(σ²_{t-1})
```

### GJR-GARCH
```
σ²_t = ω + α*ε²_{t-1} + γ*I_{t-1}*ε²_{t-1} + β*σ²_{t-1}
```
where I_{t-1} = 1 if ε_{t-1} < 0 (negative shock)

## Cointegration

Two or more non-stationary series that share a common stochastic trend.

### Engle-Granger Test
1. Regress Y_t on X_t
2. Test residuals for stationarity (ADF test)

### Johansen Test
Multivariate approach for testing cointegration between multiple series.

### Error Correction Model (ECM)
```
ΔY_t = α(Y_{t-1} - βX_{t-1}) + Σ γ_i ΔY_{t-i} + Σ δ_i ΔX_{t-i} + ε_t
```

## Forecasting

### Point Forecasts
- One-step ahead: E[Y_{t+1} | I_t]
- Multi-step ahead: E[Y_{t+h} | I_t]

### Interval Forecasts
Confidence intervals around point forecasts.

### Evaluation Metrics

**Mean Absolute Error (MAE)**:
```
MAE = (1/n) * Σ |y_t - ŷ_t|
```

**Root Mean Square Error (RMSE)**:
```
RMSE = √[(1/n) * Σ (y_t - ŷ_t)²]
```

**Mean Absolute Percentage Error (MAPE)**:
```
MAPE = (100/n) * Σ |y_t - ŷ_t| / |y_t|
```

## Unit Root Tests

### Augmented Dickey-Fuller (ADF) Test
Tests null hypothesis of unit root (non-stationarity).

**Test equation**:
```
ΔY_t = α + βt + γY_{t-1} + Σ δ_i ΔY_{t-i} + ε_t
```

### Phillips-Perron Test
Non-parametric alternative to ADF.

### KPSS Test
Null hypothesis: series is stationary (opposite of ADF).

## State Space Models

### Kalman Filter
Recursive algorithm for estimating state variables:

**State equation**:
```
x_t = F_t x_{t-1} + B_t u_t + w_t
```

**Observation equation**:
```
y_t = H_t x_t + v_t
```

**Applications**:
- Dynamic beta estimation
- Pairs trading
- Yield curve modeling

## Long Memory Processes

### ARFIMA(p,d,q)
Fractionally integrated ARIMA for long memory:
```
(1 - L)^d Y_t = ARMA(p,q)
```
where d can be non-integer.

**Hurst exponent**: H > 0.5 indicates long-range dependence.

## Spectral Analysis

Frequency domain analysis of time series.

### Periodogram
Estimates spectral density:
```
I(ω) = (1/2πn) |Σ Y_t e^{-itω}|²
```

**Applications**: Detecting cycles, seasonality

## Regime Switching Models

### Markov Switching Models
Parameters change based on unobserved regime:
```
Y_t = μ_{S_t} + ε_t
```
where S_t follows a Markov chain.

**Applications**:
- Bull/bear market identification
- Economic cycle modeling

## Practical Considerations

1. **Stationarity**: Transform non-stationary data (differencing, log returns)
2. **Model Selection**: Use AIC, BIC criteria
3. **Diagnostics**: Check residuals (Ljung-Box test, normality)
4. **Out-of-Sample Testing**: Validate forecasts on holdout data
5. **Structural Breaks**: Test for parameter stability
6. **Seasonality**: Account for periodic patterns
