import { createFileRoute } from "@tanstack/react-router";
import { EditableBlock, LegalPage } from "@/components/site-shell";

export const Route = createFileRoute("/termos")({ head: () => ({ meta: [
  { title: "Termos de Compra — MENOR JOGADOR" }, { name: "description", content: "Condições gerais de compra da MENOR JOGADOR." }, { property: "og:title", content: "Termos de Compra — MENOR JOGADOR" }, { property: "og:description", content: "Conheça as condições para pedidos, pagamento e entrega." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
]}), component: TermosPage });

function TermosPage() { return <LegalPage eyebrow="Compra segura" title="Termos de compra" description="As condições comerciais definitivas devem ser revisadas pela MENOR JOGADOR antes de receber pedidos.">
  <EditableBlock title="Disponibilidade"><p>O pedido será confirmado somente após a loja validar modelo, lavagem, tamanho e quantidade pelo WhatsApp.</p></EditableBlock>
  <EditableBlock title="Preços e pagamento"><p>Preços, descontos, formas de pagamento e momento da confirmação: a definir pela MENOR JOGADOR.</p></EditableBlock>
  <EditableBlock title="Confirmação do pedido"><p>Antes da finalização, o atendimento deve confirmar produto, tamanho, quantidade, valor total e forma de pagamento.</p></EditableBlock>
  <EditableBlock title="Entrega, retirada e trocas"><p>Consulte as páginas específicas e confirme as condições vigentes no canal oficial da loja.</p></EditableBlock>
</LegalPage> }