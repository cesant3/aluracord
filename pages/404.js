import appConfig from "../config.json";
import { Box, Button, Text } from "@skynexui/components";
import { useRouter } from "next/router";

export default function PageNotFound() {
  const router = useRouter();

  return (
    <>
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: appConfig.theme.colors.primary[100],
          backgroundImage:
            "url(https://i.ytimg.com/vi/if5HHLsKDNU/maxresdefault.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <Box
          styleSheet={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: { xs: "100%", sm: "50%" },
            textAlign: "center",
            marginBottom: "80px",
          }}
        >
          <Text
            variant="heading2"
            styleSheet={{
              marginBottom: "12px",
              color: appConfig.theme.colors.primary[500],
            }}
          >
            Hey Cowpoke!
          </Text>
          <Text
            variant="body3"
            styleSheet={{
              marginBottom: "200px",
              color: appConfig.theme.colors.neutrals[300],
            }}
          >
            Parece que o que você procurava não está mais aqui.
          </Text>
          <Button
            type="submit"
            label="Voltar para Home"
            fullWidth
            styleSheet={{
              width: "150px",
              marginBottom: "-140px",
            }}
            buttonColors={{
              contrastColor: appConfig.theme.colors.neutrals["000"],
              mainColor: appConfig.theme.colors.primary[500],
              mainColorLight: appConfig.theme.colors.primary[400],
              mainColorStrong: appConfig.theme.colors.primary[600],
            }}
            onClick={() => router.push("/")}
          />
        </Box>
      </Box>
    </>
  );
}
