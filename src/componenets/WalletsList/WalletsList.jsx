import React from 'react'

const walletList = props => {
    var wallets = props.wallets.map(wallet => {
        return <div key={wallet.id}>
            <p>name: {wallet.name}</p>
            <p>createdAt: {wallet.createdAt}</p>
        </div>
    })
    return <div>
        {wallets}
    </div>
}

export default walletList