-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.4.13-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Copiando estrutura do banco de dados para db_appjuridico
CREATE DATABASE IF NOT EXISTS `db_appjuridico` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `db_appjuridico`;

-- Copiando estrutura para tabela db_appjuridico.clientes
CREATE TABLE IF NOT EXISTS `clientes` (
  `idclientes` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) DEFAULT NULL,
  `telefone` varchar(15) DEFAULT '',
  `email` varchar(255) DEFAULT '',
  `ativo` varchar(1) DEFAULT NULL,
  `datacriacao` datetime DEFAULT NULL,
  `datamodificacao` datetime DEFAULT NULL,
  PRIMARY KEY (`idclientes`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela db_appjuridico.clientes: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;

-- Copiando estrutura para tabela db_appjuridico.processos
CREATE TABLE IF NOT EXISTS `processos` (
  `idprocesso` int(11) NOT NULL AUTO_INCREMENT,
  `num_processos` varchar(50) DEFAULT NULL,
  `titulo` varchar(100) DEFAULT NULL,
  `descricao` text DEFAULT '',
  `arquivo` varchar(255) DEFAULT '',
  `dataprocesso` datetime DEFAULT NULL,
  `dataencerramento` datetime DEFAULT NULL,
  PRIMARY KEY (`idprocesso`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela db_appjuridico.processos: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `processos` DISABLE KEYS */;
/*!40000 ALTER TABLE `processos` ENABLE KEYS */;

-- Copiando estrutura para tabela db_appjuridico.tipos_processos
CREATE TABLE IF NOT EXISTS `tipos_processos` (
  `idtipos_processos` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) DEFAULT NULL,
  `ativo` varchar(1) DEFAULT NULL,
  `datacriacao` datetime DEFAULT NULL,
  `datamodificacao` datetime DEFAULT NULL,
  PRIMARY KEY (`idtipos_processos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela db_appjuridico.tipos_processos: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `tipos_processos` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipos_processos` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
