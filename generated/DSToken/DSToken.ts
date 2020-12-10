// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Trust extends ethereum.Event {
  get params(): Trust__Params {
    return new Trust__Params(this);
  }
}

export class Trust__Params {
  _event: Trust;

  constructor(event: Trust) {
    this._event = event;
  }

  get src(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get guy(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get wat(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class Mint extends ethereum.Event {
  get params(): Mint__Params {
    return new Mint__Params(this);
  }
}

export class Mint__Params {
  _event: Mint;

  constructor(event: Mint) {
    this._event = event;
  }

  get guy(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get wad(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Burn extends ethereum.Event {
  get params(): Burn__Params {
    return new Burn__Params(this);
  }
}

export class Burn__Params {
  _event: Burn;

  constructor(event: Burn) {
    this._event = event;
  }

  get guy(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get wad(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class LogSetAuthority extends ethereum.Event {
  get params(): LogSetAuthority__Params {
    return new LogSetAuthority__Params(this);
  }
}

export class LogSetAuthority__Params {
  _event: LogSetAuthority;

  constructor(event: LogSetAuthority) {
    this._event = event;
  }

  get authority(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class LogSetOwner extends ethereum.Event {
  get params(): LogSetOwner__Params {
    return new LogSetOwner__Params(this);
  }
}

export class LogSetOwner__Params {
  _event: LogSetOwner;

  constructor(event: LogSetOwner) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class LogNote extends ethereum.Event {
  get params(): LogNote__Params {
    return new LogNote__Params(this);
  }
}

export class LogNote__Params {
  _event: LogNote;

  constructor(event: LogNote) {
    this._event = event;
  }

  get sig(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get guy(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get foo(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get bar(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get wad(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get fax(): Bytes {
    return this._event.parameters[5].value.toBytes();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get spender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class DSToken extends ethereum.SmartContract {
  static bind(address: Address): DSToken {
    return new DSToken("DSToken", address);
  }

  name(): Bytes {
    let result = super.call("name", "name():(bytes32)", []);

    return result[0].toBytes();
  }

  try_name(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("name", "name():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  approve(guy: Address, wad: BigInt): boolean {
    let result = super.call("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(guy),
      ethereum.Value.fromUnsignedBigInt(wad)
    ]);

    return result[0].toBoolean();
  }

  try_approve(guy: Address, wad: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(guy),
      ethereum.Value.fromUnsignedBigInt(wad)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  transferFrom(src: Address, dst: Address, wad: BigInt): boolean {
    let result = super.call(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(src),
        ethereum.Value.fromAddress(dst),
        ethereum.Value.fromUnsignedBigInt(wad)
      ]
    );

    return result[0].toBoolean();
  }

  try_transferFrom(
    src: Address,
    dst: Address,
    wad: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(src),
        ethereum.Value.fromAddress(dst),
        ethereum.Value.fromUnsignedBigInt(wad)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  decimals(): BigInt {
    let result = super.call("decimals", "decimals():(uint256)", []);

    return result[0].toBigInt();
  }

  try_decimals(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("decimals", "decimals():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOf(src: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(src)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(src: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(src)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  stopped(): boolean {
    let result = super.call("stopped", "stopped():(bool)", []);

    return result[0].toBoolean();
  }

  try_stopped(): ethereum.CallResult<boolean> {
    let result = super.tryCall("stopped", "stopped():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  trusted(src: Address, guy: Address): boolean {
    let result = super.call("trusted", "trusted(address,address):(bool)", [
      ethereum.Value.fromAddress(src),
      ethereum.Value.fromAddress(guy)
    ]);

    return result[0].toBoolean();
  }

  try_trusted(src: Address, guy: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("trusted", "trusted(address,address):(bool)", [
      ethereum.Value.fromAddress(src),
      ethereum.Value.fromAddress(guy)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  symbol(): Bytes {
    let result = super.call("symbol", "symbol():(bytes32)", []);

    return result[0].toBytes();
  }

  try_symbol(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("symbol", "symbol():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  transfer(dst: Address, wad: BigInt): boolean {
    let result = super.call("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(dst),
      ethereum.Value.fromUnsignedBigInt(wad)
    ]);

    return result[0].toBoolean();
  }

  try_transfer(dst: Address, wad: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(dst),
      ethereum.Value.fromUnsignedBigInt(wad)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  authority(): Address {
    let result = super.call("authority", "authority():(address)", []);

    return result[0].toAddress();
  }

  try_authority(): ethereum.CallResult<Address> {
    let result = super.tryCall("authority", "authority():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  allowance(src: Address, guy: Address): BigInt {
    let result = super.call(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(src), ethereum.Value.fromAddress(guy)]
    );

    return result[0].toBigInt();
  }

  try_allowance(src: Address, guy: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(src), ethereum.Value.fromAddress(guy)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class TrustCall extends ethereum.Call {
  get inputs(): TrustCall__Inputs {
    return new TrustCall__Inputs(this);
  }

  get outputs(): TrustCall__Outputs {
    return new TrustCall__Outputs(this);
  }
}

export class TrustCall__Inputs {
  _call: TrustCall;

  constructor(call: TrustCall) {
    this._call = call;
  }

  get guy(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get wat(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class TrustCall__Outputs {
  _call: TrustCall;

  constructor(call: TrustCall) {
    this._call = call;
  }
}

export class StopCall extends ethereum.Call {
  get inputs(): StopCall__Inputs {
    return new StopCall__Inputs(this);
  }

  get outputs(): StopCall__Outputs {
    return new StopCall__Outputs(this);
  }
}

export class StopCall__Inputs {
  _call: StopCall;

  constructor(call: StopCall) {
    this._call = call;
  }
}

export class StopCall__Outputs {
  _call: StopCall;

  constructor(call: StopCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get guy(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get wad(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class SetOwnerCall extends ethereum.Call {
  get inputs(): SetOwnerCall__Inputs {
    return new SetOwnerCall__Inputs(this);
  }

  get outputs(): SetOwnerCall__Outputs {
    return new SetOwnerCall__Outputs(this);
  }
}

export class SetOwnerCall__Inputs {
  _call: SetOwnerCall;

  constructor(call: SetOwnerCall) {
    this._call = call;
  }

  get owner_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetOwnerCall__Outputs {
  _call: SetOwnerCall;

  constructor(call: SetOwnerCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get src(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get dst(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get wad(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get guy(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get wad(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }
}

export class BurnCall extends ethereum.Call {
  get inputs(): BurnCall__Inputs {
    return new BurnCall__Inputs(this);
  }

  get outputs(): BurnCall__Outputs {
    return new BurnCall__Outputs(this);
  }
}

export class BurnCall__Inputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }

  get wad(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BurnCall__Outputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }
}

export class SetNameCall extends ethereum.Call {
  get inputs(): SetNameCall__Inputs {
    return new SetNameCall__Inputs(this);
  }

  get outputs(): SetNameCall__Outputs {
    return new SetNameCall__Outputs(this);
  }
}

export class SetNameCall__Inputs {
  _call: SetNameCall;

  constructor(call: SetNameCall) {
    this._call = call;
  }

  get name_(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class SetNameCall__Outputs {
  _call: SetNameCall;

  constructor(call: SetNameCall) {
    this._call = call;
  }
}

export class SetAuthorityCall extends ethereum.Call {
  get inputs(): SetAuthorityCall__Inputs {
    return new SetAuthorityCall__Inputs(this);
  }

  get outputs(): SetAuthorityCall__Outputs {
    return new SetAuthorityCall__Outputs(this);
  }
}

export class SetAuthorityCall__Inputs {
  _call: SetAuthorityCall;

  constructor(call: SetAuthorityCall) {
    this._call = call;
  }

  get authority_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetAuthorityCall__Outputs {
  _call: SetAuthorityCall;

  constructor(call: SetAuthorityCall) {
    this._call = call;
  }
}

export class Burn1Call extends ethereum.Call {
  get inputs(): Burn1Call__Inputs {
    return new Burn1Call__Inputs(this);
  }

  get outputs(): Burn1Call__Outputs {
    return new Burn1Call__Outputs(this);
  }
}

export class Burn1Call__Inputs {
  _call: Burn1Call;

  constructor(call: Burn1Call) {
    this._call = call;
  }

  get guy(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get wad(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class Burn1Call__Outputs {
  _call: Burn1Call;

  constructor(call: Burn1Call) {
    this._call = call;
  }
}

export class Mint1Call extends ethereum.Call {
  get inputs(): Mint1Call__Inputs {
    return new Mint1Call__Inputs(this);
  }

  get outputs(): Mint1Call__Outputs {
    return new Mint1Call__Outputs(this);
  }
}

export class Mint1Call__Inputs {
  _call: Mint1Call;

  constructor(call: Mint1Call) {
    this._call = call;
  }

  get wad(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class Mint1Call__Outputs {
  _call: Mint1Call;

  constructor(call: Mint1Call) {
    this._call = call;
  }
}

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get dst(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get wad(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class PushCall extends ethereum.Call {
  get inputs(): PushCall__Inputs {
    return new PushCall__Inputs(this);
  }

  get outputs(): PushCall__Outputs {
    return new PushCall__Outputs(this);
  }
}

export class PushCall__Inputs {
  _call: PushCall;

  constructor(call: PushCall) {
    this._call = call;
  }

  get dst(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get wad(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class PushCall__Outputs {
  _call: PushCall;

  constructor(call: PushCall) {
    this._call = call;
  }
}

export class MoveCall extends ethereum.Call {
  get inputs(): MoveCall__Inputs {
    return new MoveCall__Inputs(this);
  }

  get outputs(): MoveCall__Outputs {
    return new MoveCall__Outputs(this);
  }
}

export class MoveCall__Inputs {
  _call: MoveCall;

  constructor(call: MoveCall) {
    this._call = call;
  }

  get src(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get dst(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get wad(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class MoveCall__Outputs {
  _call: MoveCall;

  constructor(call: MoveCall) {
    this._call = call;
  }
}

export class StartCall extends ethereum.Call {
  get inputs(): StartCall__Inputs {
    return new StartCall__Inputs(this);
  }

  get outputs(): StartCall__Outputs {
    return new StartCall__Outputs(this);
  }
}

export class StartCall__Inputs {
  _call: StartCall;

  constructor(call: StartCall) {
    this._call = call;
  }
}

export class StartCall__Outputs {
  _call: StartCall;

  constructor(call: StartCall) {
    this._call = call;
  }
}

export class PullCall extends ethereum.Call {
  get inputs(): PullCall__Inputs {
    return new PullCall__Inputs(this);
  }

  get outputs(): PullCall__Outputs {
    return new PullCall__Outputs(this);
  }
}

export class PullCall__Inputs {
  _call: PullCall;

  constructor(call: PullCall) {
    this._call = call;
  }

  get src(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get wad(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class PullCall__Outputs {
  _call: PullCall;

  constructor(call: PullCall) {
    this._call = call;
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get symbol_(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}