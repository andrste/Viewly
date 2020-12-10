import { BigInt, BigDecimal, log } from "@graphprotocol/graph-ts"
import {
  DSToken,
  Mint,
  Burn,
  Transfer,
  Approval
} from "../generated/DSToken/DSToken"
import { TokenTransfer, TokenApproval, VMint, VBurn } from "../generated/schema"

export function toDecimalExponent(decimals: BigInt): BigInt {
  let decimalTotal = BigInt.fromI32(10);
	for (
		let i = BigInt.fromI32(1);
		i.lt(decimals);
		i = i.plus(BigInt.fromI32(1))
	) {
		decimalTotal = decimalTotal.times(BigInt.fromI32(10));
  }
	return decimalTotal;
}

export function convertToDecimal(
	amount: BigInt,
	decimalTotal: BigInt
): BigDecimal {
	return amount.toBigDecimal().div(decimalTotal.toBigDecimal());
}

export function handleMint(event: Mint): void {
  let entity = VMint.load(event.transaction.hash.toHex())
  if (entity == null) {
    entity = new VMint(event.transaction.hash.toHex())
  }
  let decimalsTotal = toDecimalExponent(BigInt.fromI32(18));
  let transferAmount = convertToDecimal(event.params.wad, decimalsTotal);
  entity.address = event.params.guy.toHex()
  entity.amount = transferAmount
  entity.save()
}

export function handleBurn(event: Burn): void {
  let entity = VBurn.load(event.transaction.hash.toHex())
  if (entity == null) {
    entity = new VBurn(event.transaction.hash.toHex())
  }
  let decimalsTotal = toDecimalExponent(BigInt.fromI32(18));
  let transferAmount = convertToDecimal(event.params.wad, decimalsTotal);
  entity.address = event.params.guy.toHex()
  entity.amount = transferAmount
  entity.save()
}

export function handleTransfer(event: Transfer): void {
  let entity = TokenTransfer.load(event.transaction.hash.toHex())
  if (entity == null) {
    entity = new TokenTransfer(event.transaction.hash.toHex())
  }
  let decimalsTotal = toDecimalExponent(BigInt.fromI32(18));
  let transferAmount = convertToDecimal(event.params.value, decimalsTotal);
  let timestamp = event.block.timestamp;

  entity.from = event.params.from.toHex()
  entity.to = event.params.to.toHex()
  entity.amount = transferAmount
  entity.timestamp = timestamp
  entity.save()
}

export function handleApproval(event: Approval): void {
  let entity = TokenApproval.load(event.transaction.hash.toHex())
  if (entity == null) {
    entity = new TokenApproval(event.transaction.hash.toHex())
  }
  let decimalsTotal = toDecimalExponent(BigInt.fromI32(18));
  let transferAmount = convertToDecimal(event.params.value, decimalsTotal);
  entity.owner = event.params.owner.toHex()
  entity.spender = event.params.spender.toHex()
  entity.amount = transferAmount
  entity.save()
}