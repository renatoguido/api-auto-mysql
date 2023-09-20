import { where } from "sequelize";
import AutoMobile from "../models/AutoMobile.js"


class AutoMobilleController {
	async create(req, res) {
		try {
			const autoMobille = await AutoMobile.create(req.body);

			const newAutomobile = await AutoMobile.create({
				brand,
				model,
				year,
				plate
			});

			res.status(201).json(newAutomobile);

		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	}

	async getAll(req, res) {
		try {
			const autoMobille = await AutoMobile.getAll();
			res.json(autoMobille);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	}

	async getById(req, res) {
		try {
			const autoMobille = await AutoMobile.getById(req.params.id);

			if (!autoMobille) {
				return res.status(404).json({ error: "Veiculo não encontrado" });
			}

			res.json(autoMobille);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	}

	async update(req, res) {
		try {
			const [affectedRows, autoMobille] = await AutoMobile.update(
				{
					brand,
					model,
					year,
					plate
				},
				{
				where: {
						id,
				},
			}
			);

			if (!affectedRows || affectedRows == 0) {
				return res.status(500).json({
					error: `Não foi possível atualizar o veiculo com id: ${req.params.id}`,
				});
			}

			if (!autoMobille) {
				return res.status(404).json({ error: "Veiculo não encontrado" });
			}

			res.json(autoMobille);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	}

	async delete(req, res) {
		try {
			const destroyedRows = await AutoMobile.delete(req.params.id);

			if (destroyedRows === 0) {
				return res.status(500).json({
					error: `Não foi possível excluir o veiculo com id: ${req.params.id}`,
				});
			}

			res.json({ message: "Veiculo excluído com sucesso" });
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	}
}

export default new AutoMobilleController();