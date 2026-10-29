-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 09/10/2026 às 22:57
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `projeto`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `itens_pedido`
--

CREATE TABLE `itens_pedido` (
  `id_item` int(11) NOT NULL,
  `id_pedido` int(11) DEFAULT NULL,
  `id_produto` int(11) DEFAULT NULL,
  `quantidade` int(11) DEFAULT NULL,
  `preco_unitario` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `itens_pedido`
--

INSERT INTO `itens_pedido` (`id_item`, `id_pedido`, `id_produto`, `quantidade`, `preco_unitario`) VALUES
(41, 1, 21, 1, 49.9),
(42, 2, 22, 1, 119.9),
(43, 3, 23, 1, 199.9),
(44, 4, 24, 1, 89.9),
(45, 5, 25, 1, 149.9),
(46, 6, 26, 1, 79.9),
(47, 7, 28, 1, 39.9),
(48, 8, 29, 1, 29.9),
(49, 9, 27, 1, 59.9),
(50, 10, 30, 1, 349.9);

-- --------------------------------------------------------

--
-- Estrutura para tabela `pedidos`
--

CREATE TABLE `pedidos` (
  `id_pedido` int(11) NOT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `valor_total` float DEFAULT NULL,
  `data_pedido` date DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `data_entrega` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `pedidos`
--

INSERT INTO `pedidos` (`id_pedido`, `id_usuario`, `valor_total`, `data_pedido`, `status`, `data_entrega`) VALUES
(1, 1, 49.9, '2026-10-01', 'Entregue', '2026-10-05'),
(2, 2, 119.9, '2026-10-02', 'Entregue', '2026-10-06'),
(3, 3, 289.8, '2026-10-03', 'Enviado', '2026-10-07'),
(4, 4, 89.9, '2026-10-04', 'Processando', '2026-10-09'),
(5, 5, 209.8, '2026-10-05', 'Cancelado', '2026-10-05'),
(6, 1, 79.9, '2026-10-06', 'Processando', '2026-10-11'),
(7, 7, 39.9, '2026-10-06', 'Entregue', '2026-10-08'),
(8, 8, 379.8, '2026-10-07', 'Processando', '2026-10-12'),
(9, 9, 59.9, '2026-10-08', 'Aguardando Pagamento', '2026-10-15'),
(10, 10, 149.9, '2026-10-09', 'Processando', '2026-10-14');

-- --------------------------------------------------------

--
-- Estrutura para tabela `produtos`
--

CREATE TABLE `produtos` (
  `id_produto` int(11) NOT NULL,
  `nome` varchar(150) DEFAULT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  `preco` float DEFAULT NULL,
  `categoria` varchar(50) DEFAULT NULL,
  `avaliacao` float DEFAULT NULL,
  `marca` varchar(50) DEFAULT NULL,
  `quantidade` int(11) DEFAULT NULL,
  `fornecedor` varchar(100) DEFAULT NULL,
  `imagens` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `produtos`
--

INSERT INTO `produtos` (`id_produto`, `nome`, `descricao`, `preco`, `categoria`, `avaliacao`, `marca`, `quantidade`, `fornecedor`, `imagens`) VALUES
(21, 'Camiseta Algodão', 'Básica 100% algodão', 49.9, 'Vestuário', 4.5, 'ModaBasic', 100, 'Malharia Silva', 'img_cam_01.jpg'),
(22, 'Calça Jeans Slim', 'Masculina corte slim', 119.9, 'Vestuário', 4.2, 'DenimCo', 50, 'Textil Sul', 'img_jeans_02.jpg'),
(23, 'Tênis Esportivo', 'Corrida e academia', 199.9, 'Calçados', 4.8, 'RunFast', 30, 'Calçados Brasil', 'img_tenis_03.jpg'),
(24, 'Fone de Ouvido Bluetooth', 'Sem fio isolamento', 89.9, 'Eletrônicos', 4, 'SoundGo', 80, 'ImportTech', 'img_fone_04.jpg'),
(25, 'Relógio Digital', 'Resistente à água', 149.9, 'Acessórios', 4.3, 'TimeTech', 25, 'ImportTech', 'img_relogio_05.jpg'),
(26, 'Mochila Escolar', 'Compartimento para notebook', 79.9, 'Acessórios', 4.6, 'PackSafe', 40, 'Bolsas Cia', 'img_mochila_06.jpg'),
(27, 'Garrafa Térmica 500ml', 'Bebida gelada 24h', 59.9, 'Cozinha', 4.7, 'HydroCool', 65, 'Metalurgica Norte', 'img_garrafa_07.jpg'),
(28, 'Mouse Sem Fio', 'Óptico ergonômico recarregável', 39.9, 'Eletrônicos', 4.1, 'ClickPro', 120, 'Teclados e Cia', 'img_mouse_08.jpg'),
(29, 'Livro de Ficção', 'Suspense best-seller', 29.9, 'Livros', 4.9, 'Editora Alfa', 200, 'Distribuidora Literária', 'img_livro_09.jpg'),
(30, 'Cadeira de Escritório', 'Giratória ajuste altura', 349.9, 'Móveis', 3.9, 'ComfortSeat', 15, 'Móveis do Sul', 'img_cadeira_10.jpg');

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nome` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `senha` varchar(50) DEFAULT NULL,
  `cartao` varchar(30) DEFAULT NULL,
  `endereco` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nome`, `email`, `senha`, `cartao`, `endereco`) VALUES
(1, 'Ana Silva', 'ana.silva@email.com', 'senha123', '1234-5678-9012-1111', 'Rua das Flores, 123'),
(2, 'Bruno Costa', 'bruno.c@email.com', 'bruno99', '5678-9012-3456-2222', 'Av. Central, 456'),
(3, 'Carlos Souza', 'carlos.s@email.com', 'carlinhos1', '9012-3456-7890-3333', 'Rua Amazonas, 789'),
(4, 'Daniela Lima', 'dani.lima@email.com', 'dani2026', '3456-7890-1234-4444', 'Alameda Santos, 101'),
(5, 'Eduardo Oliveira', 'edu.oliver@email.com', 'eduardo#1', '7890-1234-5678-5555', 'Rua Bahia, 202'),
(6, 'Fernanda Ribeiro', 'fer.rib@email.com', 'fernanda98', '1122-3344-5566-6666', 'Av. Brasil, 303'),
(7, 'Gabriel Almeida', 'gabriel.a@email.com', 'gabs77', '3344-5566-7788-7777', 'Rua Pará, 404'),
(8, 'Amanda Martins', 'amanda.m@email.com', 'manda123', '5566-7788-9900-8888', 'Av. Paulista, 1500'),
(9, 'Lucas Pereira', 'lucas.p@email.com', 'lucas_p', '7788-9900-1122-9999', 'Rua Chile, 55'),
(10, 'Juliana Rocha', 'ju.rocha@email.com', 'jurocha!', '9900-1122-3344-0000', 'Travessa da Paz, 9');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `itens_pedido`
--
ALTER TABLE `itens_pedido`
  ADD PRIMARY KEY (`id_item`),
  ADD KEY `id_pedido` (`id_pedido`),
  ADD KEY `id_produto` (`id_produto`);

--
-- Índices de tabela `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id_pedido`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Índices de tabela `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`id_produto`);

--
-- Índices de tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `itens_pedido`
--
ALTER TABLE `itens_pedido`
  MODIFY `id_item` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT de tabela `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id_pedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de tabela `produtos`
--
ALTER TABLE `produtos`
  MODIFY `id_produto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `itens_pedido`
--
ALTER TABLE `itens_pedido`
  ADD CONSTRAINT `itens_pedido_ibfk_1` FOREIGN KEY (`id_pedido`) REFERENCES `pedidos` (`id_pedido`),
  ADD CONSTRAINT `itens_pedido_ibfk_2` FOREIGN KEY (`id_produto`) REFERENCES `produtos` (`id_produto`);

--
-- Restrições para tabelas `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
