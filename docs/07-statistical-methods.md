# Statistical Methods and Machine Learning

## Regression Analysis

### Linear Regression
```
Y = β₀ + β₁X₁ + β₂X₂ + ... + βₙXₙ + ε
```

**Ordinary Least Squares (OLS)**:
Minimize sum of squared residuals.

**Assumptions**:
1. Linearity
2. Independence of errors
3. Homoskedasticity
4. Normality of errors
5. No multicollinearity

### Multiple R-Squared
```
R² = 1 - (SSE/SST)
```

**Adjusted R²**:
```
R²_adj = 1 - [(1-R²)(n-1)/(n-k-1)]
```

### Regularization

**Ridge Regression (L2)**:
```
min Σ(y_i - ŷ_i)² + λΣβ²_j
```

**Lasso Regression (L1)**:
```
min Σ(y_i - ŷ_i)² + λΣ|β_j|
```

**Elastic Net**:
Combination of L1 and L2 penalties.

## Factor Models

### Principal Component Analysis (PCA)
Dimensionality reduction technique:
- Finds orthogonal directions of maximum variance
- First PC explains most variance
- Used for factor extraction

**Applications**:
- Yield curve modeling (level, slope, curvature)
- Risk factor identification
- Portfolio compression

### Independent Component Analysis (ICA)
Finds statistically independent components.

### Factor Analysis
Explains correlations through latent factors:
```
X = ΛF + ε
```
Where:
- Λ = factor loadings
- F = common factors
- ε = idiosyncratic errors

## Classification Methods

### Logistic Regression
Binary outcome prediction:
```
P(Y=1) = 1 / (1 + e^{-(β₀ + β₁X₁ + ... + βₙXₙ)})
```

**Log-odds (logit)**:
```
ln(p/(1-p)) = β₀ + β₁X₁ + ... + βₙXₙ
```

### Support Vector Machines (SVM)
Finds optimal hyperplane separating classes:
- Maximum margin classifier
- Kernel trick for non-linear boundaries
- Applications: Default prediction, trading signals

### Decision Trees
Recursive partitioning:
- CART (Classification and Regression Trees)
- ID3, C4.5 algorithms
- Interpretable but prone to overfitting

### Random Forests
Ensemble of decision trees:
- Bootstrap aggregating (bagging)
- Random feature selection
- Reduces overfitting
- Feature importance scores

### Gradient Boosting
Sequential ensemble learning:
- XGBoost, LightGBM, CatBoost
- State-of-the-art performance
- Applications: Return prediction, risk modeling

## Neural Networks

### Feedforward Networks
```
y = f(W₂·σ(W₁·x + b₁) + b₂)
```

**Universal approximation theorem**: Can approximate any continuous function.

### Recurrent Neural Networks (RNN)
For sequential data:
- LSTM (Long Short-Term Memory)
- GRU (Gated Recurrent Unit)
- Applications: Time series prediction, text analysis

### Convolutional Neural Networks (CNN)
Pattern recognition in structured data:
- Applications: Chart pattern recognition, alternative data

### Autoencoders
Unsupervised learning for:
- Dimensionality reduction
- Anomaly detection
- Feature extraction

## Clustering

### K-Means
Partition into k clusters:
1. Initialize k centroids
2. Assign points to nearest centroid
3. Update centroids
4. Repeat until convergence

**Applications**: 
- Asset clustering
- Regime identification

### Hierarchical Clustering
Build hierarchy of clusters:
- Agglomerative (bottom-up)
- Divisive (top-down)

**Dendrograms**: Visualize cluster relationships.

### DBSCAN
Density-based clustering:
- Finds arbitrary-shaped clusters
- Identifies outliers

## Cross-Validation

### K-Fold Cross-Validation
1. Split data into k folds
2. Train on k-1 folds, validate on remaining fold
3. Repeat k times
4. Average performance metrics

### Time Series Cross-Validation
Respect temporal ordering:
- Rolling window
- Expanding window
- Walk-forward validation

## Model Evaluation

### Classification Metrics

**Confusion Matrix**:
```
                Predicted
                P      N
Actual  P      TP     FN
        N      FP     TN
```

**Accuracy**: (TP + TN) / Total

**Precision**: TP / (TP + FP)

**Recall (Sensitivity)**: TP / (TP + FN)

**F1 Score**: 2 * (Precision * Recall) / (Precision + Recall)

**ROC Curve**: True Positive Rate vs False Positive Rate

**AUC**: Area Under ROC Curve

### Regression Metrics
- Mean Squared Error (MSE)
- Root MSE (RMSE)
- Mean Absolute Error (MAE)
- R-squared

## Overfitting and Underfitting

**Bias-Variance Tradeoff**:
```
Error = Bias² + Variance + Irreducible Error
```

**Prevention**:
- Cross-validation
- Regularization
- Early stopping
- Ensemble methods
- More training data

## Feature Engineering

### Feature Selection
- Filter methods (correlation, chi-square)
- Wrapper methods (forward/backward selection)
- Embedded methods (Lasso, tree-based importance)

### Feature Creation
- Polynomial features
- Interaction terms
- Domain-specific indicators
- Technical indicators

### Feature Scaling
- Standardization: (x - μ) / σ
- Min-max normalization: (x - min) / (max - min)
- Robust scaling: Use median and IQR

## Bayesian Methods

### Bayes' Theorem
```
P(H|E) = P(E|H) * P(H) / P(E)
```

### Bayesian Inference
- Prior beliefs + Data → Posterior beliefs
- Incorporates uncertainty
- Sequential updating

### Applications
- Parameter estimation
- Portfolio optimization (Black-Litterman)
- Risk modeling

## Reinforcement Learning

Learning through interaction with environment.

**Components**:
- Agent, Environment, State, Action, Reward
- Q-learning, Deep Q-Networks (DQN)
- Policy gradient methods

**Applications**:
- Algorithmic trading
- Portfolio management
- Optimal execution

## Natural Language Processing (NLP)

### Sentiment Analysis
Analyze text for sentiment:
- News articles
- Social media
- Earnings calls

**Methods**:
- Lexicon-based
- Machine learning classifiers
- BERT, GPT models

### Topic Modeling
- Latent Dirichlet Allocation (LDA)
- Non-negative Matrix Factorization (NMF)

### Applications
- News-based trading
- ESG analysis
- Risk event detection

## Practical Considerations

1. **Data Quality**: Garbage in, garbage out
2. **Stationarity**: Financial data often non-stationary
3. **Look-Ahead Bias**: Don't use future information
4. **Survivorship Bias**: Account for delisted securities
5. **Transaction Costs**: Impact on backtested strategies
6. **Model Interpretability**: Balance complexity and explainability
7. **Regular Retraining**: Models degrade over time
