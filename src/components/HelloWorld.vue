<template>
	<div class="container">
		<!-- button -->
		<div class="m-3">
			<h2>button</h2>
			<button class="btn btn-default">Nộp hồ sơ</button>
			<button class="btn btn-danger ml-3">danger</button>
			<button class="btn btn-warning ml-3">warning</button>
			<button class="btn btn-success ml-3">success</button><br />

			<div class="btn-group mt-3" role="group" aria-label="Basic example">
				<button type="button" class="btn btn-primary">Left</button>
				<button type="button" class="btn btn-secondary">
					Middle
				</button>
				<button type="button" class="btn btn-danger">Right</button>
			</div>
		</div>

		<div class="m-3">
			<h2>button icon</h2>

			<button class="btn btn-default m-btn-icon">
				<i class="fas fa-sync-alt mr-1"></i> Đồng bộ dữ liệu
			</button>

			<div class="btn-group mt-3 position-relative">
				<button type="button" class="btn btn-default">
					<i class="fas fa-sync-alt mr-1"></i>Thêm mới lao động
				</button>

				<button
					type="button"
					class="btn btn-default dropdown-toggle btn-split-left"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				></button>
				<div class="dropdown-menu  dropdown-menu-right btn-dropdown">
					<a
						class="dropdown-item"
						href="javascript:void(0)"
						data-command="SaveClose"
						>Lưu và đóng</a
					>
					<a
						class="dropdown-item"
						href="javascript:void(0)"
						data-command="SaveNew"
						title="CTRL+SHIFT+S"
						>Lưu và thêm mới</a
					>
				</div>
			</div>
		</div>

		<div class="m-3">
			<h2>alert</h2>
			<div class="btn-group position-relative">
				<button
					type="button"
					class="btn btn-default"
					data-command="SaveClose"
					title="CTRL+Q"
				>
					Lưu và đóng
				</button>
				<button
					type="button"
					class="btn btn-default dropdown-toggle btn-split-left"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				></button>
				<div class="dropdown-menu  dropdown-menu-right btn-dropdown">
					<a
						class="dropdown-item"
						href="javascript:void(0)"
						data-command="SaveClose"
						>Lưu và đóng</a
					>
					<a
						class="dropdown-item"
						href="javascript:void(0)"
						data-command="SaveNew"
						title="CTRL+SHIFT+S"
						>Lưu và thêm mới</a
					>
				</div>
			</div>
		</div>

		<!-- alert -->
		<div class="m-3">
			<h2>alert</h2>
			<div class="alert alert-primary" role="alert">
				A simple primary alert—check it out!
			</div>
			<div class="alert alert-warning" role="alert">
				A simple secondary alert—check it out!
			</div>
			<div class="alert alert-success" role="alert">
				A simple success alert—check it out!
			</div>
			<div class="alert alert-danger" role="alert">
				A simple danger alert—check it out!
			</div>
		</div>

		<!-- form -->
		<div class="m-3">
			<h2>form</h2>
			<form>
				<div class="form-group">
					<label for="exampleInputEmail1">Email address</label>
					<input
						type="email"
						class="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
					/>
					<small id="emailHelp" class="form-text text-muted"
						>We'll never share your email with anyone else.</small
					>
				</div>
				<div class="form-group">
					<label for="exampleInputPassword1">Password</label>
					<input
						type="password"
						class="form-control"
						id="exampleInputPassword1"
					/>
				</div>
				<div class="form-group form-check">
					<input
						type="checkbox"
						class="form-check-input"
						id="exampleCheck1"
					/>
					<label class="form-check-label" for="exampleCheck1"
						>Check me out</label
					>
				</div>
				<button type="submit" class="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
		<!-- tooltip -->
		<div class="m-3">
			<h2>tooltip</h2>
			<button
				type="button"
				class="btn btn-secondary"
				data-toggle="tooltip"
				data-placement="top"
				title="Tooltip on top"
			>
				Tooltip on top
			</button>
			<button
				type="button"
				class="btn btn-secondary"
				data-toggle="tooltip"
				data-placement="right"
				title="Tooltip on right"
			>
				Tooltip on right
			</button>
			<button
				type="button"
				class="btn btn-secondary"
				data-toggle="tooltip"
				data-placement="bottom"
				title="Tooltip on bottom"
			>
				Tooltip on bottom
			</button>
			<button
				type="button"
				class="btn btn-secondary"
				data-toggle="tooltip"
				data-placement="left"
				title="Tooltip on left"
			>
				Tooltip on left
			</button>
		</div>
		<!-- modal -->
		<div class="m-3">
			<h2>modal</h2>
			<!-- Button trigger modal -->
			<button
				type="button"
				class="btn btn-primary"
				data-toggle="modal"
				data-target="#exampleModal"
			>
				Launch demo modal
			</button>
			<!-- Modal open -->
			<div
				class="modal fade"
				id="exampleModal"
				tabindex="-1"
				role="dialog"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="exampleModalLabel">
								Modal title
							</h5>
							<!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button> -->
						</div>
						<div class="modal-body">
							...
						</div>
						<div class="modal-footer">
							<button
								type="button"
								class="btn btn-secondary"
								data-dismiss="modal"
							>
								Close
							</button>
							<button type="button" class="btn btn-primary">
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- card -->
		<div class="m-3">
			<h2>card</h2>
			<div class="col-3">
				<div class="card">
					<div class="card-header">
						Featured
					</div>
					<div class="card-body">
						<h5 class="card-title">Special title treatment</h5>
						<p class="card-text">
							With supporting text below as a natural lead-in to
							additional content.
						</p>
						<a href="#" class="btn btn-primary">Go somewhere</a>
					</div>
					<div class="card-footer text-muted">
						2 days ago
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "HelloWorld",
		props: {
			msg: String
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h3 {
		margin: 40px 0 0;
	}
	ul {
		list-style-type: none;
		padding: 0;
	}
	li {
		display: inline-block;
		margin: 0 10px;
	}
	a {
		color: #42b983;
	}
</style>
