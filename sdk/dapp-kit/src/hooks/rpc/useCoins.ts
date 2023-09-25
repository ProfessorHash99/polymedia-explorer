// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

/**
 *  ######################################
 *  ### DO NOT EDIT THIS FILE DIRECTLY ###
 *  ######################################
 *
 * This file is generated from:
 * /crates/sui-open-rpc/spec/openrpc.json
 */

import type { GetCoinsParams } from '@mysten/sui.js/client';

import type { UseSuiClientInfiniteQueryOptions } from '../useSuiClientInfiniteQuery.js';
import { useSuiClientInfiniteQuery } from '../useSuiClientInfiniteQuery.js';
import type { UseSuiClientQueryOptions } from '../useSuiClientQuery.js';
import { useSuiClientQuery } from '../useSuiClientQuery.js';

export function useCoins(params: GetCoinsParams, options?: UseSuiClientQueryOptions<'getCoins'>) {
	return useSuiClientQuery(
		{
			method: 'getCoins',
			params,
		},
		options,
	);
}

export function useCoinsInfinite(
	params: GetCoinsParams,
	options?: UseSuiClientInfiniteQueryOptions<'getCoins'>,
) {
	return useSuiClientInfiniteQuery(
		{
			method: 'getCoins',
			params,
		},
		options,
	);
}
