import { Component } from '@angular/core';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { web3Accounts, web3Enable } from '@polkadot/extension-dapp';
import { cryptoWaitReady, mnemonicGenerate } from '@polkadot/util-crypto';
import { Keyring } from '@polkadot/keyring';
import {helloWorld} from 'payment-getway-typescript';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'agnualr-pokadot';

  constructor() {
console.log(helloWorld());
  }


  async checkConnection(): Promise<void> {
    await this.connect()
  }

  async connect() {
    const provider = new WsProvider('ws://127.0.0.1:9944');
    const _api = new ApiPromise({ provider });
    await _api.isReady;
   

  }

  async createWallet():Promise<void> {
    
    await cryptoWaitReady();

    const mnemonic = mnemonicGenerate();
    const keyring = new Keyring({ type: 'sr25519' });
    const newAccount = keyring.addFromUri(mnemonic);

  } 
}
