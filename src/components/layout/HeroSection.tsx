"use client";

import { IconChevronRight } from "@tabler/icons-react";
import { Box, Button, Text } from "@yamada-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const BG_COLOR = "#030810";
const GLITCH_CHARS = "0123456789ABCDEF#@!∑∫∂∇";

// モジュールレベルのフラグ: Strict Mode の二重実行でもイントロを正しく制御する
let introComplete = false;

const HeroSection = () => {
	const [introVisible, setIntroVisible] = useState(false);
	const [introOpacity, setIntroOpacity] = useState(1);
	const [heroOpacity, setHeroOpacity] = useState(0);
	const [heroTransition, setHeroTransition] = useState(false);
	const glitchRef = useRef<HTMLDivElement>(null);

	const runGlitch = useCallback(
		(
			el: HTMLDivElement,
			text: string,
			duration: number,
			onDone: () => void,
		) => {
			const chars = Array.from(text);
			let elapsed = 0;
			const iv = setInterval(() => {
				elapsed += 50;
				const ratio = Math.min(elapsed / duration, 1);
				el.innerHTML = chars
					.map((c, i) => {
						if (c === " ") return " ";
						const settled = i / chars.length < ratio * 1.5;
						return settled
							? c
							: `<span style="color:#4fc3f7;opacity:${(Math.random() * 0.6 + 0.3).toFixed(2)}">${GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]}</span>`;
					})
					.join("");
				if (elapsed >= duration + 200) {
					clearInterval(iv);
					el.textContent = text;
					onDone();
				}
			}, 50);
			return () => clearInterval(iv);
		},
		[],
	);

	useEffect(() => {
		const prefersReduced = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;
		if (prefersReduced) {
			setHeroOpacity(1);
			return;
		}

		if (introComplete) {
			setHeroOpacity(1);
			return;
		}

		setIntroVisible(true);

		let cancelGlitch: (() => void) | null = null;

		const t1 = setTimeout(() => {
			const el = glitchRef.current;
			if (!el) return;
			cancelGlitch = runGlitch(el, "Data Dreamers", 800, () => {
				introComplete = true;
				setTimeout(() => {
					setIntroOpacity(0);
					setTimeout(() => {
						setHeroTransition(true);
						setHeroOpacity(1);
					}, 500);
				}, 500);
			});
		}, 300);

		return () => {
			clearTimeout(t1);
			cancelGlitch?.();
		};
	}, [runGlitch]);

	return (
		<Box
			position="relative"
			w="100vw"
			h={{ base: "64vw", md: "480px" }}
			maxH="calc(100vh - 300px)"
			overflow="hidden"
			bg={BG_COLOR}
		>
			{/* 画像: モバイルは全幅、デスクトップは右70% */}
			<Box position="absolute" top={0} right={0} w="full" h="100%">
				<Image
					src="/images/challenge-lab-01.webp"
					alt="Data Dreamers"
					fill
					priority
					sizes="100vw"
					style={{ objectFit: "cover" }}
				/>
			</Box>
			{/* モバイル: 全面暗オーバーレイ */}
			<Box
				position="absolute"
				inset={0}
				display={{ base: "none", md: "block" }}
				style={{ background: `${BG_COLOR}aa` }}
			/>
			{/* デスクトップ: 左→右グラデーション */}
			<Box
				position="absolute"
				inset={0}
				display={{ base: "block", md: "none" }}
				style={{
					background: `linear-gradient(to right, ${BG_COLOR} 40%, transparent 70%)`,
				}}
			/>
			{/* グリッチイントロレイヤー */}
			{introVisible && (
				<Box
					position="absolute"
					inset={0}
					bg={BG_COLOR}
					display="flex"
					alignItems="center"
					justifyContent="center"
					zIndex={20}
					style={{
						opacity: introOpacity,
						transition: introOpacity === 0 ? "opacity 1.4s ease" : "none",
						pointerEvents: introOpacity === 0 ? "none" : "auto",
					}}
				>
					<Box textAlign="center">
						<Text
							fontSize="xs"
							letterSpacing="widest"
							color="whiteAlpha.300"
							mb={3}
						>
							AI・データサイエンスプロジェクト
						</Text>
						<div
							ref={glitchRef}
							style={{
								fontSize: "clamp(2rem, 6vw, 3rem)",
								fontWeight: 900,
								letterSpacing: "0.15em",
								color: "white",
								lineHeight: 1,
							}}
						>
							&nbsp;{/* Data Dreamers */}
						</div>
					</Box>
				</Box>
			)}
			{/* ヒーローレイヤー */}
			<Box
				position="absolute"
				inset={0}
				zIndex={10}
				style={{
					opacity: heroOpacity,
					transition: heroTransition ? "opacity 1.6s ease" : "none",
				}}
			>
				{/* タイトル: モバイル左寄せ / デスクトップ中央 */}
				<Box
					position="absolute"
					inset={0}
					display="flex"
					flexDirection="column"
					alignItems={{ base: "flex-start", md: "center" }}
					justifyContent="center"
					pl={{ base: 6, md: 0 }}
				>
					<Text
						fontSize="xs"
						letterSpacing="widest"
						color="whiteAlpha.500"
						mb={3}
					>
						AI・データサイエンスプロジェクト
					</Text>
					<Text
						fontSize={{ base: "5xl", md: "6xl" }}
						fontWeight="black"
						letterSpacing="widest"
						bgGradient="linear(135deg, white 40%, #a8c8e8 100%)"
						bgClip="text"
						lineHeight={1}
					>
						Data Dreamers
					</Text>
				</Box>
				{/* CTA: 左下 台形バナー */}
				<Box
					position="absolute"
					bottom={{ base: "8", md: "4" }}
					left="-6"
					bgColor="banner"
					transform="skewX(30deg)"
					px={10}
					py={3}
				>
					<Box
						transform="skewX(-30deg)"
						display="flex"
						flexDirection="column"
						alignItems="flex-start"
						gap={2}
					>
						<Text fontSize="sm" color="whiteAlpha.800">
							新入生向けプロジェクト説明会を実施します
						</Text>
						<Link href="/for-new-dreamers">
							<Button
								variant="ghost"
								color="white"
								width="full"
								_hover={{ bg: "whiteAlpha.200" }}
								endIcon={<IconChevronRight />}
								size="sm"
							>
								詳しくはこちら
							</Button>
						</Link>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default HeroSection;
