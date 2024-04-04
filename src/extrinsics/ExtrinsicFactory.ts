import { GearApi, ProgramMetadata } from '@gear-js/api';
import { Account } from '@gear-js/react-hooks/dist/esm/types';
import { AnyJson } from '@polkadot/types/types';

export class ExtrinsicFactory {

    private api: GearApi | undefined;

    private accounts: any;

    private account: Account | undefined;

    private programId: `0x${string}`;

    private metadata: ProgramMetadata | undefined;

    constructor(accounts: any, account: Account | undefined, api: GearApi) {
        this.api = api;
        this.accounts = accounts;
        this.account = account;
        this.programId = '0x8ca22c6a1a3c55b18acedacdbccdc4538a32177d73ff169c6de1566ffd44fd96'
        this.metadata = ProgramMetadata.from('0x000200010000000000010300000001080000000000000000010d000000dd0b380010106773746418636f6d6d6f6e287072696d69746976657318436f64654964000004000401205b75383b2033325d0000040000032000000008000800000503000c0808696f18416374696f6e00010c2c48656c6c6f416374696f6e0000003443726561746550726f6a6563740c01106e616d65100118537472696e6700012c6465736372697074696f6e100118537472696e6700013c6d696c6573746f6e655f76616c75651401605665633c28753132382c204d696c6573746f6e654964293e0001003455706461746550726f6a6563740c010869641c0110753132380001106e616d65100118537472696e6700012c6465736372697074696f6e100118537472696e670002000010000005020014000002180018000004081c08001c0000050700200808696f144576656e740001142c416374696f6e4576656e740000003850726f6a6563744372656174656404011c70726f6a65637424011c50726f6a6563740001003450726f6a65637473466f756e6404012070726f6a656374732c01505665633c28753132382c2050726f6a656374293e0002004050726f6a656374734e6f74466f756e6404011c6d657373616765100118537472696e670003003050726f6a656374466f756e6404011c70726f6a65637430013c28753132382c2050726f6a6563742900040000240808696f1c50726f6a65637400001401146f776e657228011c4163746f7249640001106e616d65100118537472696e6700012c6465736372697074696f6e100118537472696e670001207363726f775f696428011c4163746f72496400013c6d696c6573746f6e655f76616c75651401605665633c28753132382c204d696c6573746f6e654964293e00002810106773746418636f6d6d6f6e287072696d6974697665731c4163746f724964000004000401205b75383b2033325d00002c000002300030000004081c2400340808696f444c656166436f6e74726163745374617465000004012070726f6a656374732c01505665633c28753132382c2050726f6a656374293e0000')
    }

    public async messageExtrinsic(payload: AnyJson) {
        const gas = await this.calculateGasLimit(payload);

        const message: any = {
            destination: this.programId,
            payload,
            gasLimit: BigInt(gas?.toHuman().min_limit?.toString().replace(/,/g, '') as string),
            value: 0,
        }

        if (this.validateAccount()) {
            return this.api?.message.send(message, this.metadata);
        }

        return null;
    }

    private validateAccount(): boolean {
        const localAccount = this.account;
        return this.accounts.some(
            (vissibleAccount: Account) => vissibleAccount.address === localAccount?.address
        )
    }

    private async calculateGasLimit(payload: AnyJson) {
        return this.api?.program.calculateGas.handle(
            this.account?.decodedAddress as `0x${string}`,
            this.programId, 
            payload, 
            0,      
            false, 
            this.metadata,
        );
    }
}