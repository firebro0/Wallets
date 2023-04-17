from web3.auto import w3
from web3 import Account

num_wallets = 10

for i in range(num_wallets):
    acct = Account.create()
#    print("Address:", acct.address)
#    print("Private Key:", acct._private_key.hex())
    print("Address:", acct.address ,"| Private Key:", acct._private_key.hex())
    print()