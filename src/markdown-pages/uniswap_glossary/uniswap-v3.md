# Sommelier’s Uniswap v3 Glossary for Beginner Liquidity Providers

Welcome to the *Sommelier Uniswap v3 Glossary for Beginner Liquidity Providers.* This glossary covers the terms introduced in the Uniswap v3 whitepaper introduction section. These terms are important to understand how Uniswap v3 works and how Automated Market Makers function for Liquidity Providers.

## Automated Market Maker

### What is an automated market maker (AMM)?

Let’s say Alice and Bob want to start trading on a decentralized exchange (DEX). For this, they can use an automated market maker (AMM), which is a type of decentralized exchange that relies on a mathematical formula or algorithm to determine the price of the assets that are being traded. In other words, it’s a robotic market maker that is always willing to quote prices between two assets according to a simple pricing algorithm.  

For example, if Alice starts to buy her tokens using an automated market maker, she’ll notice that the platform doesn't rely on buyers and sellers to agree on the price for a certain asset to execute a trade. Instead, a code will calculate a price between two assets.

When new users or liquidity providers join in, the size of the pool expands. One decentralized exchange that has implemented an AMM is Uniswap v3.

**Key takeaways:**

* It is a type of decentralized exchange (DEX) protocol that depends on a mathematical formula to determine the price of the assets.
* AMMs make sure that the number of units it holds of each asset, multiplied together, is always equal to a fixed constant.
* The pool expands when the new users or liquidity providers join.

## Capital Efficiency

### What is capital efficiency?
Capital efficiency is the measure of how much capital is used for token exchange activity on Uniswap when compared to how much capital is actually offered for trades at all the possible prices in the pool.

Decentralized exchanges such as Uniswap v2 require that capital to complete a trade would be evenly placed at all possible prices, $0 to infinity.

This means that if trading happens at a very small price, say $0.99 to $1.01, there would be a large amount of Liquidity Provider capital that would sit on the exchange platform’s smart contract untraded at prices such as $0.95 or at $1.50. Untraded or unused capital is inefficient because that capital is not actively being used to generate trading fees and profits.

In Uniswap v3 Liquidity Providers have more control over where they are able to place their capital. Liquidity Providers in Uniswapv 3 are able to use their capital in more flexible and narrower price ranges that was not previously possible in Uniswapv2. This means that Liquidity Providers can collect more fees for less capital. Also, for traders who want to trade or exchange their tokens, they will enjoy prices that are closer to where they want to complete their exchange.

If Alice wants to make as much profit as possible on UniswapV3, she can now set her price for exchanging tokens in a narrow range such one between $0.99 and $1.01.

**Key takeaways:**

* Capital efficiency is the measure of how much capital is used for trades in the automated market maker
* In Uniswap v3, liquidity providers can choose where to place their capital for making trades
* Capital efficiency is greater in Uniswap v3 than Uniswap v2

## Concentrated Liquidity

### What is concentrated liquidity?

In Uniswap v1 and v2, liquidity was provided at every possible price on the automated market maker. In Uniswap v3, liquidity providers add their tokens to the pool at specific price ranges instead of across all prices. This means liquidity providers can add tokens at prices that are nearer to each other. It means that there are more tokens for exchange at these prices and less price difference due to big orders in the pool. This means that the capital used in the pool is not wasted, and less capital is required to make sure the pool is working effectively.
For example, if Alice uses Uniswap v3, now she can choose a pool with a specific price range within which she wants to trade her tokens. Now that Alice and other users put their funds in a liquidity pool of their choice, they will encounter better market offers, as there are more tokens to provide the capacity of choosing the best rates between two assets.

**Key takeaways:**

* Concentrated liquidity allows liquidity providers or users to choose what highest and lowest price they wish to allocate their capital to in the liquidity pool.
* In Uniswap v3, liquidity providers only provide tokens to the reserve at a particular price range.
* Liquidity providers can add tokens at prices that are nearer to each other.
* Concentrated liquidity has an impact, and it enhances capital efficiency.
* The capital used in the pool is not wasted.

## Constant Function Market Makers

### What is a constant function market maker?

Constant function market makers (CFMMs) are a large class of automated market makers (AMMs) based on a constant function. It says that when a token x is withdrawn or bought, a proportional amount of y is deposited or sold to maintain the constant k. Suppose there are 50 apples and 50 oranges in a basket.Using this function, the total number of fruits in the basket will be 2500. The total number of fruits in the basket can’t be changed, and it must be 2500.

Let’s say you want to buy an apple. To buy (or withdraw) an apple, you will have to pay (or deposit) some orange -- as the number of fruits in the basket has to be 2500. If an apple is withdrawn (or bought) from the basket, there will be 49 apples left. Since the total number of fruits in the basket can’t be changed, what will be the total number of oranges now? With a simple equation, we can find the number of oranges by dividing 2500 by 49 apples. This gives us 51.02 oranges. Prior, we had 50 oranges in the basket, and now it has increased to 51.02. This shows that for one apple, you will have to pay 1.02 oranges to maintain the basket of 2500 fruits.
  
That’s how popular market makers such as Uniswap and Balancer work. CFMMs are designed to enable the decentralized exchange of digital assets.

**Key takeaways:**

* Constant function market makers (CFMMs) are a large class of automated market makers (AMMs) that are based on a constant function.
* The constant function of CFMM says that when a token x is withdrawn or bought, a proportional amount y is deposited or sold to maintain the constant k.
* The size of the pool expands when new liquidity providers participate.
* Currently, the decentralized system is mainly influenced by constant function market makers.
* Some popular CFMMs include Uniswap, Balancer, and Curve.

## Constant Product Market Maker

### What is a constant product market maker?

Constant Product Market Market is a decentralized exchange design that runs on the blockchain to facilitate exchange of tokens. It establishes the price of a chosen token. For instance, there is a basket or pool with 50 apples and 50 oranges, and the number of fruits in the basket must be 2500. If an apple (x) is withdrawn or bought from the basket (or pool), some number of oranges (y) has to be deposited or sold to maintain the number of fruits in the basket.
The supply of apple (x) increases, the supply of oranges (y) decreases to maintain the constant value of 2500 (k).

Despite the successful implementation, this model has some disadvantages. The volatility makes it risky, and users pay more with Uniswap than the traditional centralized exchange. Due to high volatility and constant price, sometimes the supply of one token is more, and the price of another token goes down. This results in a lower possibility of new trades within the pool. So, it can be very risky for one and extremely profitable for another.

**Key takeaways:**

* A Constant Product Market Maker establishes the price of a chosen token.
* The concept is that no matter how many tokens are bought or sold, the product of the pool must be the same.
* The huge volatility makes it risky, and users have to pay more.
* Due to high volatility and constant price, there are high risks for one token and extreme profitability for another.
* Sometimes the supply of one token is more, and the price of another token goes down.

## Constant Product Reserve

### What is constant product reserve?

In Uniswap v3, a pair of tokens are priced using a constant product formula. It says that no matter what amount of tokens are deposited or withdrawn, the multiplication of tokens remains the same in the pool.

For instance, in a basket or pool, the multiplication of 50 apples with the number of 50 oranges has to be 2500. If an apple is withdrawn or bought, it will increase the quantity of the oranges, but the total number of fruits in the basket will remain the same. Here the total number of fruits is 2500, which is the constant product reserve.

In Uniswap v3, the trading fee is charged when a user wants to trade tokens with the pool.

**Key takeaways:**

* In Uniswap v3, the product of tokens has to be a constant. It is called a constant product reserve.
* The basic concept behind constant product reserve is that trades must not change the product.
* If one token is withdrawn or bought, another token is deposited or sold, and the combination or product of both remains the same in the pool.

## Curve

### What is Curve?

Curve Finance is a decentralized exchange (DEX) running on Ethereum. It is an automated market maker protocol designed for stablecoins. Anyone can add their assets to several different liquidity pools and earn fees. Curve.fi has become one of the biggest DeFi players today. It supports USDC, USDT, DAI, TUSD, BUSD, and sUSD, as well as BTC pairs. It is fast and efficient and allows users to trade between these pairs. It is said that Curve’s prices are usually the best in the business.

For the transaction, one needs to pay fees of 0.04%. Since Curve trades only stablecoins, there are lower chances of losses.

Curve is non-custodial, which means it doesn’t hold the users tokens. For example, if Bob decides he wants to invest and yield using a stablecoin, an option created to avoid the volatility of the cryptocurrency market, he can use Curve to operate directly with his cryptocurrencies without leaving his funds in an account on the exchange platform.

**Key takeaways:**

* Curve is an automated market maker protocol designed for stablecoins
* Curve.fi has become one of the biggest DeFi players today.
* It supports USDC, USDT, DAI, TUSD, BUSD, and sUSD, as well as BTC pairs.
* It is non-custodial and hence doesn’t hold the money of users.

## Decentralized Exchange (DEX)

### What is Decentralized Exchange?

A Decentralized Exchange (DEX) is an exchange that operates on the blockchain. The exchange may be programmed by a series of smart contracts that execute the record of order placement and order fulfilment of trades between participants. A decentralized exchange does not require user accounts or intermediaries to manage the exchange transactions as they are originated and completed on the blockchain.

A decentralized exchange can have many different designs and may use a number of different blockchain and cryptography technologies to deliver the exchange functionality. Ideally, a decentralized exchange can never be shut down if the blockchain on which it is run cannot be shut down.

Some decentralized exchanges are known as Automated Market Makers.

**Key takeaways:**

* A decentralized exchange operates on a blockchain
* A decentralized exchange does not store user account information
* A decentralized exchange may also be an automated market maker

## Decentralized Finance

### What is DeFi?

Decentralized finance is a theory behind cryptocurrency and digital assets that says  financial products should be available and open to anyone rather than only to an authority, such as a bank. If you buy a cup of coffee, you pay the bill by using cash or a card. There is one middleman between you and the cafe owner called the bank. There is no third party in a decentralized finance or DeFi system.  The transaction is between two, which is also known as a peer-to-peer transaction.

DeFi works on the software written on blockchains, making it possible for buyers and sellers to trade freely without banks or middlemen.
DeFi is not only applicable to buying and selling,  it is also useful when it comes to other financial services such as loans, insurance, crowdfunding, derivatives, etc.

If Bob and Alice want access to some type of financial service that doesn’t require the participation of a third entity to manage their money, -for example to ask for a credit or manage their savings in a digital format,- they would use a decentralized finance platform. The importance of these types of services relies on the control of users over their money and the wider access to financial services without the restrictions imposed by financial institutions.

**Key takeaways:**

* Decentralized Finance or DeFi is a concept based on the belief that financial products should be available and open to the public.
* DeFi advocates the idea of peer-to-peer transactions where there is no role of the middlemen like banks or institutions.  
* It works on the software technology called Blockchain, which ensures that the data is accurate.  
* DeFi applies to financial services such as trading, loaning, insurance, crowdfunding, and derivatives.
* According to Investopedia, as of March 2021 the total value locked in DeFi contracts is over $41 billion.

## ERC-20 Token

### What is an ERC-20 Token?

ERC20 refers to the technical standard in Ethereum that makes it possible to create a token with a name, a balance amount of tokens, an owner, and a supply of tokens.

This technical standard is used by many smart contract software developers to create tokens that have names in the Ethereum blockchain and that may represent different types of value. The ERC-20 standard makes it very easy to create a token on the Ethereum blockchain and to allow anyone to interact with the token.

In the Uniswap v3 world, all tokens on the exchange follow the ERC-20 specification guidelines. However, in Uniswap v3, the LP token that represents ownership of the share of the pool is not an ERC-20 specification, but a different specification called a Non-Fungible token.

**Key takeaways:**

* ERC-20 is a specification for tokens on the ethereum blockchain
* ERC-20 specification makes it possible to give tokens names, balances, owners, and supply
* All tokens traded on Uniswap v3 pools are ERC-20 tokens.

## Factory

### What is a factory?

A factory contract is an ethereum smart contract that creates and deploys "child" smart contracts. The child smart contracts are sometimes referred to as assets. The factory contract itself will store the address information about the created children contracts so there is a relationship connecting the two in the Ethereum blockchain and a way to track the assets of the factory contract.

In Uniswap v3, all new pools that are created are child contracts of the Uniswap factory contract. In Uniswap v2, there was only one child smart contract for each pool. However, in Uniswap v3, there will be three fee tiers for each pool so the Uniswap v3 factory will create three child contracts for each pool.

**Key takeaways:**

* A factory contract is an ethereum smart contract
* A factory contract is a smart contract that creates a child contract
* A Uniswap v3 factory contract to create a new Uniswap pool will create three child contracts for the three price tiers of each pool

## Fee Structure

### What is the fee structure?

How much does it cost to buy cryptocurrency (crypto) at exchanges? Crypto exchanges charge fees on different types of user behavior. This is called the fee structure. The primary source of revenue for an exchange is a trading fee. It is charged on fiat with crypto as well as crypto with crypto trades. The fee is charged when the order is processed. Generally, the fee ranges from 0% to 0.30% of the total value of the order.

The fee structure at crypto exchanges also includes charges on deposits and withdrawals. Deposit fees are less common than withdrawal fees since exchanges want to increase their reach.

Some exchanges also offer crypto margin trading, enabling users or liquidity providers to borrow additional funds. In return, these exchanges charge additional fees based on the amount borrowed.

For example, Uniswap currently has a 0.3% fee for each exchange of tokens. So everytime Alice decides to exchange her tokens using this platform -let’s say she has some UNI she wants to exchange for ETH- she has to pay fees. At the same time, these fees can also serve as a way to provide her and other users with enough funds to enable other processes that require liquidity, like taking a credit.

**Key takeaways:**

* The fee structure of the cryptocurrency exchanges depends on the user’s behavior.
* The primary source of revenue for an exchange is a trading fee. It is charged on fiat with crypto as well as crypto with crypto trades.
* Generally, the fee ranges from 0% to 0.30% of the total value of the order.
* The fee structure at crypto exchanges also includes charges on deposits and withdrawals.
* Crypto exchanges charge additional fees on the borrowings based on the amount borrowed on margin.

## Flexible Fees

### What are flexible fees?

Cryptocurrency exchanges charge fees on different types of user behavior, which is called the fee structure. The Uniswap v3 offers three different fee tiers: 0.05%, 0.30%, and 1.00%. These options are introduced so that liquidity providers make their strategies based on the risks they are willing to take. The lowest fee tier of 0.05% may be ideal for stablecoins.
In Uniswap v3, there can be multiple pools for the same token pair.

So, for example, Alice can enter into one of multiple liquidity pools that manage ETH and DAI exchanges. Once she starts trading her tokens in these pools, she’ll notice that each pool manages a different fee level needed to complete an exchange, even though they trade the same pair of assets.

**Key takeaways:**

* Uniswap v3 is offering three fee tiers: 0.05%, 0.30%, and 1.00%.
* For stablecoin, users can have a lower fee of 0.05%.
* The options are introduced so that liquidity providers can make their strategies based on the risk they are willing to take.
* In Uniswap v3, there can be multiple pools for the same token pair.
* Each pool can have its fee level.

## Gas Fee

### What is a gas fee?

On the Ethereum blockchain, gas is the fee required to publish a transaction into the Ethereum blockchain successfully. It is the amount of Ether (in a small unit called gwei) that is paid to miners for processing transactions on the network. One gwei equals 0.000000001 or 10-9 ETH.
Even if the transaction fails, the gas fee has to be paid for the computation done by the miners.
Ethereum is one of the most used blockchains, and that’s why the gas fee is high. Multiple transactions and high demand, increase the fee. In 2017 and 2020, the value of Ethereum and its demand made new records. Experts hope that the high gas problem will be solved soon when the Ethereum 2.0 network comes out, which will focus on reducing the gas fee and faster transaction.

For example, if Alice wishes to buy an Ethereum-based token using a DeFi platform, she’ll encounter the fees or gas required by the network to proceed with the transaction. Gas fees are present in every DeFi service. It is the “fuel” to provide liquidity to keep the network going.

**Key takeaways:**

* The price paid for computing a transaction on the Ethereum blockchain is called a gas fee.
* An amount of Ether (in a small unit called gwei) is paid to miners for processing on the network. One gwei equals 0.000000001 or 10-9 ETH.
* Even if the transaction fails, a gas fee is paid to the miners for computing the process on the network.
* Since Ethereum Blockchain is one of the most congested networks in the crypto world, the gas fee is high.
* Experts hope that the new version of Ethereum, called Ethereum 2.0, will reduce the gas fee and  speed up the transaction.

## Improved Price Oracle

### What is an improved price oracle?

In Uniswap v3, the improved price oracle provides an easier way for liquidity providers to check the price of assets. In the new version, the performance of time-weighted average prices (TWAPs) has improved. The TWAP is determined by checking the average of all the prices over a specified time. In Uniswap v3, the price averages can be checked through TWAP with a request. All the recent TWAPs that have been calculated within the previous nine days can be checked.

If a service wants to exchange tokens using Uniswap, it may use the Uniswap price oracle to retrieve the price rate of assets on the exchange. In this case, if Bob’s trading app wants to know if the price of his assets have maintained or changed in a one-week period, it may use Uniswap v3 improved TWAPs, which will check an average of prices within a period of time chosen.

**Key takeaways:**

* In Uniswap v3, the performance of TWAP oracles has improved significantly.
* With the improved price oracle, it is faster and cheaper to check the recent price of the assets.
* The price averages can be checked through TWAP with a request.
* If requested, all the recent TWAPs calculated within the last nine days can be checked.
* The improved price oracle can also help to check the other indicators.

## Limit Orders

### What is a Limit Order?

Liquidity Providers want control of the price at which their tokens will trade on the Automated Market Maker. A limit order is a type of order to purchase or sell a token at a specified price or better. For buy limit orders, the buy order will be fulfilled only at the limit price or a lower price, while for sell limit orders, the sell order will be executed only at the limit price or a higher price.

With a buy limit order, the purchaser will pay any price at the limit or less. The price is guaranteed, but the amount of tokens that are transacted at the price are not guaranteed. If there are no tokens within the limit, then the order is not satisfied.

Limit orders are different relative to market orders. In a Market Order, the order for the amount is filled without any constraint on the price at which the order must be completed.

In Uniswap v3, it will be possible to create limit orders.

**Key takeaways:**

* Limit Orders offer control of the price that an order is filled
* Limit Orders may not be able to control the amount of the tokens that are filled in the order
* Limit orders will be now possible in Uniswap v3

## Liquidity Fragmentation

### What is liquidity fragmentation?

In the crypto world, trading happens all over the world, and the system is quite divided. There are hundreds of exchanges and tokens of different nature. The divided system results in liquidity issues, where it is difficult for traders to connect with each other and agree on a price. This is liquidity fragmentation. For example, Bitcoin and Ethereum are popular and they find their places mostly on all crypto exchanges. However, there are hundreds of other small tokens that get listed only on a few exchanges.

The price of a token is different across the different exchanges, and traders experience challenges. If there is an issue of liquidity, it is difficult for traders to enter or exit the market. The lack of liquidity adds to the existing problems like the need for multiple accounts on multiple exchanges, different fee structures, a lack of trading pairs, etc.

Let’s say that Alice got lucky and acquired some newly issued tokens from a giveaway. Excited, she might want to exchange them for another token or fiat money. Unfortunately, there’s only a few places where these tokens are listed. Also, due to the lack of a unified marketplace, she faces issues to sell or exchange her tokens for a good price, since the market is fragmented among the different platforms, each with a scarcity of buyers and sellers. To fix this issue, called Liquidity Fragmentation, there are services dedicated exclusively to connect traders across the market to allow them to reach good offers.

**Key takeaways:**

* Liquidity Fragmentation is a situation in which it’s difficult for traders to make the trade due to various factors like a different exchange, exchange rates, etc.
* The divide in the crypto ecosystem makes it difficult for traders to access the best price, and it creates a liquidity problem.
* The liquidity problem makes it difficult for traders to enter or exit the market.
* The lack of liquidity adds to the existing issues like the need for multiple accounts on multiple exchanges, different fee structures, etc.
* To meet the gap, liquidity aggregators like Orion Protocol or FinxFlo try to connect traders to the entire crypto market by giving them access to the best price.

## Liquidity Oracle

### What is the liquidity oracle?

In Uniswap v3, it is easy to track the sum of the current value of L or the liquidity in range. It can be tracked by evaluating each pool. It is an addition to the time-weighted average price, which helps to determine the liquidity in the pool. In other words, the liquidity accumulator’s values are checkpoints along with the price accumulator. It helps to evaluate which fee-tier pool can be used for trading.

For example, Bob wants to start exchanging his tokens but also follow their price and find the liquidity pool that best matches the price rate he’s striving for. As we’ve already learned, thanks to liquidity or presence of enough funds it is possible to set the best rates in a marketplace, so the liquidity oracle would scan not only for average prices, but would also tell Bob which are the best pools to trade his tokens.

**Key takeaways:**

* In Uniswap v3, the liquidity oracle helps to determine liquidity.
* It tracks the sum of the current value of L or the liquidity in the range.
* It evaluates the liquidity of each pool.
* Liquidity accumulator’s values are checkpoints along with the price accumulator.
* It helps to evaluate which fee-tier pool can be used for trading.

## Liquidity Pool

### What is a liquidity pool?

A liquidity pool is a collection of funds locked in a smart contract. It is used to facilitate decentralized trading, lending, and other functions. In the crypto world, the liquidity pools are the backbone of decentralized exchanges (DEX).
The users or liquidity providers provide the fund to the liquidity pool by adding an equal value of two tokens in a pool to create a market. The algorithm manages the trading activity and price in the pool. Uniswap model is the biggest decentralized exchange operating some of the largest liquidity pools.

For example, we can think of a liquidity pool as a robot that is ready to trade as long as it has enough liquidity or funds to carry on an exchange. So if Alice wants to trade her tokens, she can get into a decentralized exchange and pick the best liquidity pool to either buy or sell tokens without the need of Bob on the other side of the operation, but rather using the funds locked in the smart contract i.e., the robot.

**Key takeaways:**

* A liquidity pool is a collection of funds that runs on a smart contract.
* The users or liquidity providers  provide the fund to the liquidity pool by adding an equal value of two tokens in a pool to create a market.
* In Uniswap v3, liquidity pools will have more features than uniswapv2 and will require more active participation by Liquidity Providers

## Liquidity Providers

### Who are liquidity providers?

The liquidity providers( LPs) are individuals or institutions that buy and sell a particular asset at specific prices. "Liquidity provider" is essentially synonymous with "market maker" as their main job is to facilitate trading in the crypto space by providing shares they own so that buyers and sellers can trade easily. Since they are involved in trading and make tokens "liquid" (easily converted to cash), they are called liquidity providers.

Liquidity providers are paid with the transaction fees for enabling trades. Their payment or transaction fee is based on the percentage of the liquidity pool or collection of funds they provide. Liquidity providers are required to fund two different assets to enable traders to switch between one and the other by trading them in pairs.

For example, Alice and Bob can be liquidity providers by participating in the cryptocurrency market by buying and selling their funds in two different assets (e.g. ETH/USD). This activity also supplies the market with tokens for other participants to trade and convert to other assets or cash.

**Key takeaways:**

* "Liquidity provider" is essentially synonymous with "market maker," and their main function is to facilitate trading.
* The liquidity providers z(LPs) are market brokers or institutions that buy and sell assets at certain prices.
* They provide the shares they own so that buyers and sellers can trade easily.
* They make tokens "liquid" or easily convert them to cash.
* They are paid with the transaction fees, which are based on the percentage of the liquidity pool they provide.

## Market Maker

#### What is a Market Maker?

A Market Maker is someone who participates in the market as they buy and sell assets on an exchange at a certain price. By determining the prices for which they are willing to trade their tokens, market makers facilitate trading operations for other participants by providing funds (liquidity) and a price range for assets that are used by all the  market participants.

Market makers help the market grow by providing funds in certain tokens. Market participants can make profit by executing trades with different price ranges in multiple cryptocurrency exchanges, collecting the difference between the highest and lowest price they are willing to trade their tokens for across these platforms.

**Key takeaways:**

* Market makers buy and sell assets on an exchange for profits
* Market makers facilitate trading operations for other exchange participants
* Market maker activities provide information that is valuable to all other exchange participants

## Miners

### Who are miners?

Miners are like inspectors in the crypto world who are responsible for ordering and verifying the transactions happening around the world. By verifying the transactions, they make sure that there is no overlap. They use a full node to provide validation to the transaction. In return, they get their incentive  in the form of cryptocurrency. So, for verifying Bitcoin transactions, miners get Bitcoin, and for the verification of an Ethereum transaction, miners get Ether. That’s how with every verified transaction, a new currency is mined.

For the mining purpose, miners use specific hardware machinery, such as ASIC (application-specific integrated circuit) for Bitcoin and GPU (graphics processing unit) for Ethereum. Miners or groups of miners use hundreds of computers to verify the transaction.

So we can say that miners are both the hardware or devices used specifically to do the process of confirming certain cryptocurrency transactions and the owners of these devices. Bob could, for example, mine certain cryptocurrency using an ASIC, and Alice might prefer to mine using her computer or GPU. This allows them to generate passive income in cryptocurrencies without recurring to more advanced strategies, like trading.

**Key takeaways:**

* Miners are responsible for verifying the cryptocurrency transaction.
* They use thousands of computers and specialized hardware to verify the transactions.
* Miners use algorithms to solve mathematical tasks and give validation in blockchain transactions.
* In return, they get their fee, which is in the form of cryptocurrency. So for verification of Bitcoin, they get Bitcoin as their fee.
* The fee miners get after the verification of cryptocurrency adds more cryptocurrency into the system.

## Multiple Pools

### What are Multiple Pools?

Multiple Pools in Uniswap v3 means that any pair of tokens in the market can be traded using three different pools, each with a different swap fee.

In Uniswap v1 and v2 every liquidity pool is composed by a single pair of tokens, with an uniform fee of 0.30% to all swap exchanges.

In Uniswap v3, the pools are created using the same smart contract, but now the factory contract also enables three different fee rates as the standard rates. They are 0.05%, 0.30%, and 1% respectively. These fees are to provide different fee tier of a variety of pools (e.g., stablecoins, rarely traded tokens). UNI governance can create additional fee tiers for trading tokens in the pools.

**Key takeaways:**

* Uniswapv1 had only 1 fee tier. Uniswap v3 will have three fee tiers
* The new Uniswap v3 fee tiers are 0.05%, 0.30%, and 1.0%
* The fee tiers mean that each pair will have three pools per pair
* The fee tiers will be controlled by governance

## Non-Compounding Fees

### What are Non-Compounding Fees?

For the previous Uniswap v1 and v2 versions, swap commissions, or the fees that liquidity providers receive when trades complete successfully,  were directly deposited as liquidity in the pool. This automatic deposit of fees into the liquidity pool allowed the pool  to grow consistently over time. This was known as compounding fee growth.

In Uniswap v3, fees no longer compound into the pool’s reserves. Instead, we have non-compounding fees. Non-Compounding fees means that fee earnings are now stored separately in a new smart contract called the Periphery Contract. This new smart contract keeps track of all the fees that collect from each of the exchange transactions that successfully complete in the Uniswap pool.

**Key takeaways:**

* Non-Compounding fees are fees that are not automatically added back to the pool reserves and are a new way fees are treated in Uniswap v3
* Uniswap has a new smart contract called the Periphery Contract that will handle the management of swap fees.

## Non-Custodial Exchange

### What is a non-custodial exchange?

In a non-custodial exchange, a user participates in trading without handing control of their funds to an intermediary. It does not require a user-account to complete an exchange or purchase of a token. That is why a non-custodial exchange is also called a Decentralized Exchange, or “DEX”.

It is suitable for those liquidity providers who are reluctant to trust a centralized exchange and don’t want to share their personal information. Tokens are exchanged directly between parties based on agreed smart contract software of the exchange that is executed on the blockchain.

For example, when Alice wants to buy a stablecoin such as DAI she can do it in either an exchange that requires her to create an account, where the exchange provides her with a wallet in the platform, a custodial platform, or use a non-custodial exchange instead.

If Alice uses a non-custodial exchange, then she can do direct transactions and exchange her tokens and cryptocurrency directly with other exchange users. Most importantly, it means that inside the platform she’ll be managing only the funds used to make the trade, rather than leaving funds in the platform.

**Key takeaways:**

* The non-custodial exchanges don’t hold the money of the liquidity provider. The liquidity provider is in complete control of the crypto.
* It doesn’t require an account to trade. One can start trading without opening an account.
* It ensures liquidity, security, anonymity, and convenience for the users.
The crypto is automatically deposited back into the user’s possession.

## Non-Custodial Wallet

### What is a non-custodial wallet?

There is a common phrase in the crypto world: “Not your keys, not your coins.” It means that if your crypto is stored in your wallet and you don’t have keys, is it really yours?
Non-custodial crypto wallets give you the authority to take charge of your keys and funds. It means the individual can get complete control over their money, and it can’t be seized by a third party like a government or a bank.

Some people prefer to store their cryptocurrencies on exchange accounts, and some feel more comfortable with a non-custodial wallet, which eliminates the third party between you and your crypto.

Non-custodial wallets are in the form of software and hardware both. The software can be installed on mobile phones or desktops. Generally, the non-custodial wallets require users to retain a 12–24 word seed phrase composed of random words to access an account. The phrase is used as a backup password recovery method.

The non-custodial hardware wallets look like a pen drive or USB storage device. While doing the transaction, a hardware non-custodial wallet needs to be connected with a computer or mobile device via USB ports or Bluetooth. Experts say the most secure way to hold cryptocurrency is by using hardware wallets.

**Key takeaways:**

* A non-custodial wallet allows users to hold and own their private keys while having full control of their funds.
* The money can’t be seized by a third party like a government or a financial institution.
* Non-custodial wallets are in the form of software and hardware both. The software can be installed on mobile phones or desktops.
* It asks users to retain a 12–24 word seed phrase composed of random words to access an account. The phrase is like a backup password.
* The non-custodial wallet can also be in the form of hardware devices, which look like a USB storage device.

## Non-Fungible Liquidity

### What is Non-Fungible Liquidity?

Non-Fungible Liquidity is a feature where the funds of liquidity providers that are placed into the pool are represented by a special Ethereum account type known by the term Non-Fungible Token. The Non-Fungible token is a design guide also known as the ERC721 specification. The specification describes a token that has an owner, a supply, a balance, but each token is unique and non-divisible.

In Uniswap v3, Liquidity Pool ownership is represented by Non-Fungible tokens. These tokens are different to the v1 Liquidity Provider tokens that were previously based on the ERC-20 specification and were previously fungible and divisible. Fees that liquidity providers receive when traders are completed on Uniswap are accounted for by the Non-Fungible Liquidity tokens.

Non-Fungible Liquidity tokens are also known as Native Liquidity tokens in Uniswap v3

  **Key takeaways:**

* Non-Fungible liquidity in Uniswap v3 is represents the non-divshare of funds that participants deposit into the Uniswap v3 pool
* Non-Fungible tokens are non-divisible tokens that follow the ERC-721 specification.
* Fees to Liquidity Providers in Uniswap v3 are accounted to the Non-Fungible tokens

## Order book

### What is an Order book?

An order book is an electronic, ordered, list of buy and sell orders, between participants on an exchange. This ordered list is created and updated from the orders given by all the exchange participants. An order book lists the number of tokens and their offer and ask price at each price point. The order book may also identify the market participants behind the buy and sell orders. Some order books may allow the participants to remain anonymous. The order book provides market information that is used by all market participants.

**Key Takeaways:**

* An order book is an electronic list of buy and sell orders on an exchange
* An order book is updated with asks and offers for tokens at various price points
* An order book gives awareness of the state of the market that is valuable information to all participants.

## Periphery Contract

### What is a periphery Contract?

Introduced in Uniswap v2, the periphery is a constellation of smart contracts designed to support domain-specific interactions with the core smart contracts of the Uniswap v2 and v3 automated market makers. Because of Uniswap’s permissionless nature, the contracts have no special privileges, and are in fact only a small subset of the universe of possible periphery-like contracts. However, they are useful examples of how to safely and efficiently interact with Uniswap v2 and v3.

In the case of Uniswap v3, a periphery contract covers new functionalities that involve funds movement or position as well as collected swap fees management using the Non-Fungible token specification.

The Uniswap v2 contracts introduced the separation between the core and periphery contracts, where the core contracts are responsible for supporting liquidity providers, providing time weighted price feeds and enforcing core accounting invariants. The features designed to support or protect traders are implemented with separate contracts in the periphery that call into the core.

**Key takeaways:**

* The periphery contracts support non-core Uniswap activities
* The periphery contracts are not required for Uniswap to function
* The periphery contracts in Uniswap v3 now handle swap fee collection and tracking

## Permissionless Blockchain

### What is permissionless blockchain?

Permissionless blockchain is a digital ledger of transactions that requires no permission to join. It is truly decentralized and has a transparent network. It is open for all and is known as a public blockchain. The copies of the ledger are stored. Bitcoin and Ehtereum are designed to be on permissionless networks.
An example of a permissionless blockchain is Bitcoin. Being a public, transparent ledger, this type of blockchain is also the reason why it’s considered to be semi-anonymous, allowing anyone to follow the transactions made from an specific wallet address.
**Key takeaways:**

* A permissionless blockchain is a digital ledger that requires no permission to join.
* It is truly decentralized and has a transparent network.
* It is also known as a public blockchain.
* The copies of the ledger are stored.
* Cryptocurrencies such as Bitcoin and Ethereum are designed on permissionless blockchains.

## Price

### What is “price”?

In AMM, the relationship between the amount of one token with the amount of another token determines the price. If from the basket or pool you want to buy an apple, you will have to pay for some oranges in order to maintain the exact number of fruits.  For example, to withdraw an apple, one has to pay for some oranges. The ratio between these two fruits determines the price.

In Uniswap, if a token is withdrawn or bought, it increases the supply of another token to preserve the constant of the pool, and this results in price determination.

**Key takeaways:**

* The relationship between one token with another token determines the price.
* To buy one token, one has to deposit another token in order to maintain the constant pool, and this gives the price of the token.
* If a token is withdrawn or bought, it increases the supply of another token, which determines the price.
* These tokens run on smart contracts which enforce the rules of pricing.
* The relation of tokens in the pool, in combination with the constant product formula, ultimately determines the price.

## Price Range

### What is the price range?

The difference between the highest and lowest price is called the price range. In Uniswap v3, concentrated liquidity allows liquidity providers or users to choose what minimum and maximum price at which they wish to place the token they want to deposit. The liquidity providers have the option to choose what they want to add to the pool and at what price. For example, DOGE at 10 cents or DOGE at 50 cents is a range of 40 cents.

**Key takeaways:**

* The difference between the highest and lowest price of a token is called the price range.
For example, DOGE at 10 cents or DOGE at 50 cents is a range of 40 cents.
* In Uniswap v3, concentrated liquidity allows liquidity providers or users to choose the minimum and maximum price of the token.
* In Uniswap v3, liquidity providers have the option to select different price ranges.
* Different price ranges help liquidity providers to trade in different directions and use their capital.

## Protocol Fee Governance

### What is protocol fee governance?

In Uniswap V2, there was a protocol fee in which a part of the trading fee was redirected from the liquidity providers to the UNI token holders. The same will be seen in Uniswap v3; however, there will be a difference. Instead of a fixed percentage of protocol fee, in V3, it will be flexible. The rules made by UNI token holders, also called UNI governance, have set a range of the fee percentage to collect the protocol fee. The fee depends on the number of times one is exchanging one token for another token.
The sum of protocol fees collected by UNI governance is known as the collection protocol function.

**Key takeaways:**

* A part of the trading fee is redirected from the liquidity providers to the UNI token holders in a protocol fee.
* In Uniswap v3, instead of a fixed percentage of protocol fee, there will be flexibility.
* UNI governance has set a range of the percentage of the fee to collect the protocol fee.
* The fee depends on the number of times one is exchanging one token for another token.
* The sum of protocol fees collected by UNI governance is known as the collection protocol function.

## Range Orders

### What is a Range Order

In Uniswap v3, a Range Order is an order with two prices: An upper price and a lower price. The Uniswap v3 Liquidity Provider gives the two prices of the range order. A Liquidity Provider will enter their range order to tell other users on the exchange their preference for where they think prices will be accepted by market participants. The range order is the price range that users on the exchange can use to complete an exchange transaction.

For example, Alice will enter a Range order on Uniswap v3 of $0.99 and $1.01 so that her liquidity is available at those prices for any exchange users that want to take that price.

Range Orders are similar to Limit Orders, but have two main differences in the Uniswap v3 Automated Market Maker.

Range orders have a limit as to how small or narrow they can be.
A Range order that is crossed must be withdrawn by the user. If the user does not withdraw their liquidity, if the price changes direction and crosses the range again, the trade will be reversed.

**Key takeaways:**

* A Range Order is an order with two prices. An upper price and a lower price
* A Range Order is use by the Liquidity Provider to indicate their preferred price to complete an exchange transaction
* A Range Order is different from a limit order in that it has a limit as to how narrow it can be and the liquidity must be withdrawn when the range is successfully met by an exchange transaction or it will be reverted if prices change direction

## Reserves

### What are the reserves?

The pairs of tokens that a liquidity provider has is called a reserve. Uniswap is based on a concept that says that the multiplication of tokens is always the same in the pool. For instance, in a basket or pool there are 50 apples and 50 oranges. The multiplication of the fruits in the basket will be 2500. When an apple is withdrawn or purchased, a proportional amount of orange is deposited or sold to maintain the constant 2500.

Here the combination of apple and oranges that the pool holds is a reserve. In other words, the pair of tokens in the pool is the reserve.

**Key takeaways:**

* Reserves are the combination of tokens a liquidity provider can have from the pool.
* A liquidity provider can have as many reserves as he or she wants.
* Each fee tier has its pool, and it can have different reserves.
* The combination of tokens runs on a smart contract.
* The combination or product of reserves is always the same.

## Slippage

### What is slippage?

When a trader on an automated market maker type of decentralized exchange places an order, the trader’s order will be completed at whatever prices are offered for the token. This means that if the order was placed at $1.00, but there are only a few tokens available for sale at $1.00, but then the rest only at $1.20, the order will be fulfilled completely at then whatever is available for sale.

The difference between the desired price of $1.00 and the final price of $1.20 is called slippage.

If Bob wants to buy 100 apples at $1.00 and places the $100 order on the Uniswap exchange, but there are only 50 apples at $1.00 and 50 apples at $2.00 offered by Liquidity Provider Alice, then Bob will get 50 apples at $1.00 and 25 apples at $2.00 so that he will only receive 75 apples. His slippage is 25%.

In Uniswap v3, slippage is addressed by allowing Liquidity Providers to place more liquidity where there is more demand. This will mean that slippage should be reduced for traders on the exchange.

**Key takeaways:**

* In automated market makers like Uniswap, slippage occurs when there is not enough liquidity at the desired price and the order is completed at the next available prices
* Slippage means that trades may cost more than the original order
* Uniswap v3’s design will help address slippage by allowing Liquidity Providers more control over where to place liquidity

## Smart Contract

### What is a smart contract?

Smart contracts are self-executing programs stored on a blockchain. The programs can be simple or complicated. A smart contract runs when predetermined conditions are met. The code of the smart contract controls the execution and tracks the transactions. A smart contract is useful as it reduces the need for trusted intermediators and enforcement costs, and lowers the risk of fraud.

Smart contracts are among the most useful programs that run on blockchain as they enable the transactions of cryptocurrency.

**Key takeaways:**

* Smart contracts are self-executing programs stored on a blockchain.
* The transactions only happen when certain conditions in the agreement are met.
* A smart contract is useful as it reduces the need for trusted intermediators and costs, and reduces the risk of fraud.
* The code of the smart contract controls the execution and tracks the transactions.
* Smart Contracts are useful for providing financial trades and services, like insurance, credit authorization, legal processes, etc.

## Swap Fee

### What is the Swap Fee?

A swap fee is a specific amount charged by the automated market maker system for the  successful exchange of two tokens. In Uniswap v1 and v2 there is a fixed rate of 0.3% for the exchange of tokens in all pools. In Uniswap v3 swap fees vary depending on the type of pools and will now come in three different rates: 0.05%, 0.30%, and 1%.

The payment of these fees is divided between liquidity providers depending on their contribution of tokens to the pool reserves.

In Uniswap v3, protocol governance will vote to determine changes to these fee rates or the addition of new fees.

**Key takeaways:**

* Swap fees are the fees collected for the successful trading of tokens on the automated market maker exchange
* Uniswap v3 swap fees are no longer just 0.3% for all pools, but now 0.05%, 0.30% and 1.0% for each pools
* Swap Fees changes in Uniswap v3 will be determined by UNI token governance

## Tick Interval

### What is a tick interval?

See Tick Spacing[hyperlink]

## Tick Spacing
### What is Tick Spacing?

The distribution of liquidity into ticks is the core innovation of Uniswap V3 and is the basis of all the other innovations. A tick spacing is a measure of difference in price between the minimum upward or downward movement of the price of a token on an exchange.This spacing of the price is where liquidity providers can trade and provide their funds to the pool as market makers. Ticks are the representation of the list of different prices at which the liquidity in the pool is available. Prices in the liquidity pool are always expressed in reference of one token against the other token in the pool. These are presented as percentages of price. For instance, the standard Uniswap v3 pool offers a 1 percent tick spacing.

A lower and upper tick together are called a Range. And a liquidity provider can place their liquidity on the Uniswap automated market maker using any number of ranges to express their preference for prices of the tokens. These ranges are also known as a Range Order.

If Alice wants to make as much profit as possible on UniswapV3, she can now set her price for exchanging stablecoin tokens in a narrow range such one between $0.99 and $1.01. The 0.99 price is the lower tick and the $1.01 price is her upper tick. The range in which she places her tick is her Range Order.

**Key takeaways:**
* Tick spacing is the measure of a space between the minimum upward or downward movement in price of a token on an exchange.
* Ticks are the representation of the list of different prices of tokens available for exchange.
* A lower and upper tick together are called a Range.
* On Uniswap v3, liquidity is grouped into tick ranges and fees are rewarded based on those tick ranges

## Time-Weighted Average Price
### What is the time-weighted average price (TWAP)?
Time-weighted average price (TWAP) is the average price of a token over a time period. It is a trading indicator that shows the average price of a token at a given time.

To understand the price of a token, a trader checks the opening, closing, highest and lowest price of a token at a given time. To get the TWAP, the trader takes the average of the price.  
The main purpose of TWAP is to understand the price. It indicates the trend of the market.
It allows traders to compare the prices of tokens. It helps liquidity providers to make strategies and take decisions. With the help of TWAP, traders can decide to enter and exit the market.

**Key takeaways:**
* Time-weighted average price (TWAP) is the average price of a token over a time period.
* It is a trading indicator that shows the average price of a token at a given time.
* TWAP represents the trend of the market.
* It allows traders to compare prices and make strategies and decisions.
* TWAP helps the traders to decide when to enter and exit the market.


## Time Weighted Average Liquidity
 
### What is time weighted average liquidity?

Time-weighted average liquidity shows which pool will have the most reliable time-weighted average price. It is a unique feature of Uniswap v3. It helps liquidity providers to get an idea about the liquidity of that pool, so it is a liquidity accumulator that tracks the liquidity of the pool. It is tracked alongside the price accumulator. It helps to evaluate which fee-tier pool can be used for trading.

If Bob starts trading using Uniswap v3, he’ll get the help of the platform to find a pool or smart contract with funds that have the best and most stable price for the exchange Bob wants to do, either buying or selling tokens.

**Key takeaways:**
* Time-weighted average liquidity indicates which pool will have the most reliable time-weighted average price.
* It helps liquidity providers to get an idea about the liquidity of that pool.
* It is a liquidity accumulator that tracks the liquidity of the pool.
* It is tracked alongside the price accumulator.  
* It helps to evaluate which fee-tier pool can be used for trading.

## YieldSpace
### What is YieldSpace?
YieldSpace is an automated liquidity provider for fixed yield tokens. It brings fixed-rate, fixed-term borrowing and lending to decentralized finance.
The Yield Protocol introduced the concept of fyTokens, which allows fixed-rate borrowing and lending and interest rate discovery on the Ethereum blockchain. fyTokens can be sold and purchased anywhere, which is similar to the concept of Uniswap.

Let’s say that Alice wants to trade certain tokens that work as discount bonds -meaning that she can buy and hold them at a fixed price to redeem them at a higher price after a period of time. With an automated liquidity provider, Alice can buy and sell fyTokens in a similar fashion as the traditional market using DeFi.

**Key takeaways:**
* YieldSpace is an automated liquidity provider for fixed-yield tokens.
* It brings fixed-rate, fixed-term borrowing and lending to decentralized finance.
* The Yield Protocol introduced the concept of fyTokens, which allows fixed-term borrowings.
* It allows fixed-rate borrowing and lending and interest rate discovery on the Ethereum blockchain.
fyTokens of YieldSpace can be sold and purchased anywhere, which is similar to the concept of Uniswap.

# REFERENCES
1. Uniswap v3 Whitepaper: [Uniswap v3 Core](https://uniswap.org/whitepaper-v3.pdf)
2. Uniswap v3 Glossary: [Uniswap v3 Glossary](https://docs.uniswap.org/concepts/V3-overview/glossary)
3. Finematics: [Uniswap v3 – New Era Of AMMs?](https://finematics.com/uniswap-v3-explained/)
4. Messari: Uniswap V3: [Capital Efficiency At Its Finest](https://messari.io/article/uniswap-v3-capital-efficiency-at-its-finest)
5. Investopedia: [Decentralized Finance (DeFi) Definition](https://www.investopedia.com/decentralized-finance-defi-5113835)
6. Coinmarketcap: Uniswap v3 Guide: [The Apex DEX Reclaims Its Edge](https://coinmarketcap.com/alexandria/article/uniswap-v3-guide-the-apex-dex-reclaims-its-edge)
7. CoinDesk: [Uniswap Unveils Version 3 in Bid to Stay DeFi’s Top Dog](https://www.coindesk.com/uniswap-launches-version-3-in-bid-to-stay-defis-top-dog)
8. Yield.is: [YieldSpace: An Automated Liquidity Providerfor Fixed Yield Tokens](https://yield.is/YieldSpace.pdf)
9. Cointelegraph: [Finance Redefined: Uniswap v3 is here, but was it worth the wait?](https://cointelegraph.com/news/finance-redefined-uniswap-v3-is-here-but-was-it-worth-the-wait-march-17-24)
10. Boxmining.com: [Uniswap v3 DEX: What is it? New features?](https://boxmining.com/uniswap-v3/)
11. Gitconnected.com: [What’s New in Uniswap v3?](https://levelup.gitconnected.com/whats-new-in-uniswap-v3-a04a8f2673bb)
12. Binance academy: [What is Curve.fi?](https://academy.binance.com/en/articles/what-is-curve-finance-in-defi)
13. Medium.com: Constant Function Market Makers: {DeFi’s “Zero to One” Innovation](https://medium.com/bollinger-investment-group/constant-function-market-makers-defis-zero-to-one-innovation-968f77022159)
14. Blockchain Council: [Permissioned and Permissionless Blockchains: A Comprehensive Guide](https://www.blockchain-council.org/blockchain/permissioned-and-permissionless-blockchains-a-comprehensive-guide/)
15. Sommelier Finance: [Five Ways Uniswap v3 changes the world for Liquidity Providers on the AMM](https://sommelier.finance/blog/blogpost/?blog/five-ways-uniswapv3-changes-the-world-for-liquidity-providers-on-the-amm)
16. Arthur Ventures: [Why Capital Efficiency Matters](https://www.arthurventures.com/blog/why-capital-efficiency-matters)
17. Uniswap [Uniswap v2 Core Concepts](https://uniswap.org/docs/v2/core-concepts/)
